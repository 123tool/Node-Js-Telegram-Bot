const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const token = '';
const bot = new TelegramBot(token, {polling: true});

// Function to generate the message with the links
const generateMessage = (chatId) => {
  return `
- Successful operation 
 
🌐 PUBG MOBILE 📱
- V131 - ix-event.com.tr/enter/131?id=${chatId}
- V130 - ix-event.com.tr/enter/130?id=${chatId}
- V128 - ix-event.com.tr/enter/128?id=${chatId}
- V127 - ix-event.com.tr/enter/127?id=${chatId}
- V126 - ix-event.com.tr/enter/126?id=${chatId}
- V125 - ix-event.com.tr/enter/125?id=${chatId}

🇰🇷 PUBG Korean
- K1 - ix-event.com.tr/enter/K1?id=${chatId}

🇮🇳 BGMI (PUBG INDIA)
- D4 - ix-event.com.tr/enter/D4?id=${chatId}
- D3 - ix-event.com.tr/enter/D3?id=${chatId}
- D2 - ix-event.com.tr/enter/D2?id=${chatId}
- D1 - ix-event.com.tr/enter/D1?id=${chatId} [ Tournament ]

⚡ FREE FIRE
- FF1 - ix-event.com.tr/enter/FF1?id=${chatId}
- V1 - ix-event.com.tr/enter/CODA?id=${chatId}

📱 FACEBOOK
- FBV1 - ix-event.com.tr/enter/FB?id=${chatId}

📱 INSTAGRAM
- insta - ix-event.com.tr/enter/IG?id=${chatId}

🐦 Twitter
- TW - ix-event.com.tr/enter/TW?id=${chatId}

📱 TikTok
- TK2 - ix-event.com.tr/enter/TK2?id=${chatId}
- TK - ix-event.com.tr/enter/TK?id=${chatId}

📱 SnapChat
- SN - ix-event.com.tr/enter/SN?id=${chatId}

💵 PayPal || CC
- PY - ix-event.com.tr/enter/PY?id=${chatId}
- CC - ix-event.com.tr/enter/PY/card.php?id=${chatId}
`;
};

// Listen for the /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = generateMessage(chatId);
  bot.sendMessage(chatId, message);
});

console.log('Bot is running...');
