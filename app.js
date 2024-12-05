const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'];

  // 检测 UA 并重定向
  if (userAgent.includes('Twitterbot/1.0') || userAgent.includes('facebookexternalhit')) {
    res.redirect('https://www.microsoft.com');
  } else {
    res.sendFile(__dirname + '/miragepage.html');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});