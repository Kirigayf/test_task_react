import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

let bot: Telegraf;
let adminChatId: string;

export function initTelegramBot() {
  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_ADMIN_CHAT_ID) {
    throw new Error('Требуются TELEGRAM_BOT_TOKEN и TELEGRAM_ADMIN_CHAT_ID в .env');
  }

  bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
  adminChatId = process.env.TELEGRAM_ADMIN_CHAT_ID;
  
  bot.launch()
    .then(() => console.log('Telegram bot started'))
    .catch(err => console.error('Bot start error:', err));

  return bot;
}

export function getBotInstance() {
  if (!bot) {
    throw new Error('Telegram bot not initialized');
  }
  return { bot, adminChatId };
}