const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 定义需要检测的 User-Agent 关键词数组
const socialMediaBots = [
  'Twitterbot',
  'facebookexternalhit',
  'Facebot',
  'LinkedInBot',
  'Pinterest',
  'Tumblr',
  'Medium',
  'Xing',
  'Plurk',
  'MeWe',
  'Instagram',
  'Messenger',
  'Snapchat',
  'WhatsApp',
  'Skype',
  'Line',
  'Viber',
  'KakaoTalk',
  'TelegramBot',
  'Slackbot',
];

// 路由处理
app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'];

  // 检测是否包含社交媒体 bot 的 User-Agent
  const isBotRequest = socialMediaBots.some((bot) => userAgent.includes(bot));

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
