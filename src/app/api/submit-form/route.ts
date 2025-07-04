import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { notifyNewSubmission } from '@/lib/telegram-bot';
import { Submission } from '../../types/database';

import '@/lib/init';

export async function POST(request: Request) {
  try {
    const dbPath = path.join(process.cwd(), 'db.sqlite3');
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const { name, email, phone } = await request.json();
    const result = await db.run(
      'INSERT INTO submissions (name, email, phone) VALUES (?, ?, ?)',
      [name, email, phone]
    );

    // Получаем только что добавленную запись
    const newSubmission = {id: result.lastID!, name, email, phone}

    // Отправляем уведомление
    if (newSubmission) {
      await notifyNewSubmission(newSubmission);
    }

    return NextResponse.json({ 
      message: 'Data saved successfully',
      id: result.lastID 
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { message: 'Error saving data' },
      { status: 500 }
    );
  }
}