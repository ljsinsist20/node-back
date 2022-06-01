const express = require('express')
const router = express.Router()
const admin_handler = require('../router_handler/admin')


router.post('/reguser', admin_handler.reg)

module.exports = router