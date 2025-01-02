const Repository = require('../Repositories/Repository')

class TiltController {
    static async saveTiltData(req, res) {
        try {
            const { sensing_time, ang_x: Ang_Roll, ang_y: Ang_Pitch, ang_z: Ang_Yaw } = req.body;

            console.log("時間:", sensing_time);
            console.log("角度 X:", Ang_Roll);
            console.log("角度 Y:", Ang_Pitch);
            console.log("角度 Z:", Ang_Yaw);

            const data = {
                ang_roll: Ang_Roll,
                ang_pitch: Ang_Pitch,
                ang_yaw: Ang_Yaw,
                sensing_time,
                device_id: "test_device",
            };
            const Repo = new Repository('hwt9053_tilt');
            const savedData = await Repo.create(data);
            res.status(200).send({ message: '資料已成功接收與儲存', savedData });
        } catch (err) {
            console.error('處理請求時發生錯誤:', err);
            res.status(500).send({ error: '伺服器錯誤' });
        }
    }
}

module.exports = TiltController;