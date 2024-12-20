const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 定义需要检测的 User-Agent 关键词数组（全部小写）
const socialMediaBots = [
  'twitterbot',            // Twitter's bot
  'facebookexternalhit',   // Facebook's link preview scraper
  'facebot',               // Facebook's bot
  'linkedinbot',           // LinkedIn's bot
  'pinterest',             // Pinterest's bot
  'tumblr',                // Tumblr's bot
  'medium',                // Medium's bot (not commonly seen, but included for safety)
  'xing-contenttabreceiver', // Xing's bot
  'plurkbot',              // Plurk's bot
  'mewe',                  // MeWe scrapers (no formal bot UA, might depend on their implementation)
  'instagram',             // Instagram's bot
  'messenger',             // Facebook Messenger (uses facebookexternalhit)
  'snapchat',              // Snapchat's scraper bot
  'whatsapp',              // WhatsApp's scraper bot
  'skypeuripreview',       // Skype's URL preview bot
  'linebot',               // LINE's bot
  'viber',                 // Viber's bot
  'kakaotalk_scraper',     // KakaoTalk's bot
  'telegrambot',           // Telegram's bot
  'slackbot',              // Slack's bot
];

// 路由处理
app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'] || ''; // 获取 User-Agent，防止为 undefined
  const userAgentLowerCase = userAgent.toLowerCase(); // 转换为小写

  // 检测是否包含社交媒体 bot 的 User-Agent
  const isBotRequest = socialMediaBots.some((bot) => userAgentLowerCase.includes(bot));

  if (isBotRequest) {
    // 如果是社交媒体平台的 bot 请求，重定向到 Microsoft
    res.redirect('https://www.microsoft.com');
  } else {
    // 发送 public 目录下的 miragepage.html
    res.redirect('https://www.google.com/');
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
