const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const Repository = require('./Repositories/Repository');

// 設定伺服器端口與IP
const PORT = 8086; // 可替換成你想使用的端口
const HOST = '192.168.50.215'; // 可替換成你的IP地址

const app = express();

// 中間件設置
app.use(bodyParser.json()); // 處理 JSON 請求體

// 接收 POST 請求的路由
app.post('/data', async (req, res) => {
    try {
        const { sensing_time, ang_x: Ang_Roll, ang_y: Ang_Pitch, ang_z: Ang_Yaw } = req.body;

        console.log("時間:", sensing_time);
        console.log("角度 X:", Ang_Roll);
        console.log("角度 Y:", Ang_Pitch);
        console.log("角度 Z:", Ang_Yaw);

        const Repo = new Repository('hwt9053_tilt');
        await Repo.create({
            ang_roll: Ang_Roll,
            ang_pitch: Ang_Pitch,
            ang_yaw: Ang_Yaw,
            sensing_time,
            device_id: "test_device",
        });

        res.status(200).send({ message: '資料已成功接收與儲存' });
    } catch (err) {
        console.error('處理請求時發生錯誤:', err.message);
        res.status(500).send({ error: '伺服器錯誤' });
    }
});

// 建立 HTTP 伺服器
const server = http.createServer(app);

// 啟動伺服器
server.listen(PORT, HOST, () => {
    console.log(`HTTP 伺服器已啟動，正在監聽 http://${HOST}:${PORT}`);
});

// 錯誤處理
server.on('error', (err) => {
    console.error(`伺服器錯誤: ${err.message}`);
});
