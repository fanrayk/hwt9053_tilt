const net = require('net');
const Repository = require('./Repositories/Repository')

// 設定伺服器端口與IP
const PORT = 8087; // 可替換成你想使用的端口
const HOST = '192.168.50.215'; // 允許所有網絡介面連接

// 建立 TCP 伺服器
const server = net.createServer((socket) => {
    console.log(`新連線: ${socket.remoteAddress}:${socket.remotePort}`);

    // 接收資料
    socket.on('data', (data) => {
        const parsedData = JSON.parse(data.toString());
        const sensing_time = parsedData.sensing_time;
        const Ang_Roll = parsedData.ang_x;
        const Ang_Pitch = parsedData.ang_y;
        const Ang_Yaw = parsedData.ang_z;

        console.log("時間:", parsedData.sensing_time);
        console.log("角度 X:", parsedData.ang_x);
        console.log("角度 Y:", parsedData.ang_y);
        console.log("角度 Z:", parsedData.ang_z);

        const Repo = new Repository('hwt9053_tilt')
        Repo.create({ ang_roll: Ang_Roll, ang_pitch: Ang_Pitch, ang_yaw: Ang_Yaw, sensing_time, device_id: "test_device" })
    });

    // 連線關閉事件
    socket.on('close', () => {
        console.log(`連線關閉: ${socket.remoteAddress}:${socket.remotePort}`);
    });

    // 錯誤處理
    socket.on('error', (err) => {
        console.error(`Socket 錯誤: ${err.message}`);
    });
});

// 監聽指定的端口
server.listen(PORT, HOST, () => {
    console.log(`TCP 伺服器已啟動，正在監聽 ${HOST}:${PORT}`);
});

// 錯誤處理
server.on('error', (err) => {
    console.error(`伺服器錯誤: ${err.message}`);
});
