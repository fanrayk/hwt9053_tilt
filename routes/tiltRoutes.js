const express = require('express');
const TiltController = require('../controllers/TiltController');

const router = express.Router();

router.post('/data', TiltController.saveTiltData); // 儲存資料

module.exports = router;
