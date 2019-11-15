const express = require('express');
const router = express.Router();
const admin = require('../controller/admin')

//管理员的登录
router.post('/admin/login', admin.login);
router.get('/yzm', admin.yzm)

router.get('/mobileisallow', admin.mobileisallow);

module.exports = router;