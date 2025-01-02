const http = require('http');
const app = require('./app');

const PORT = 8086;
const HOST = '192.168.50.215';

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
    console.log(`HTTP 伺服器已啟動，正在監聽 http://${HOST}:${PORT}`);
});

server.on('error', (err) => {
    console.error(`伺服器錯誤: ${err.message}`);
});
