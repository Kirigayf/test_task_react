import { initTelegramBot, getBotInstance } from './telegram-init';
import { Submission } from '../app/types/database';

export async function notifyNewSubmission(submission: Submission) {
  const { bot, adminChatId } = getBotInstance();

  const message = `🎉 Новая заявка!\n\n` +
                 `🆔 ID: ${submission.id}\n` +
                 `👤 Имя: ${submission.name}\n` +
                 `📧 Email: ${submission.email}\n` +
                 `📞 Телефон: ${submission.phone}\n`;

  try {
    await bot.telegram.sendMessage(adminChatId, message);
  } catch (error) {
    console.error('Ошибка отправки уведомления:', error);
  }
}

if (require.main === module) {
  initTelegramBot();
}