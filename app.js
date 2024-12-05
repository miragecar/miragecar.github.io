const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 路由处理
app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'];

  // 检测 UA 并重定向
  if (userAgent.includes('Twitterbot/1.0') || userAgent.includes('facebookexternalhit')) {
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
