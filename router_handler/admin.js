const db = require('../db/index')

//加密 
// const bcrypt = require('bcryptjs')

exports.reg = (req, res) => {
    const userInfo = req.body
    const sqlStr = 'select * from admin where username= ? '
    db.query(sqlStr, userInfo.username, (err, results) => {
        if (err) {
            return res.send({
                status: 3,
                msg: '注册用户失败，请稍后再试'
            })
        }
        if (results.length > 0) {
            return res.send({
                status: 1,
                msg: '用户名被占用，请更换其他用户名！'
            })
        }
        //插入
        const sql = 'insert into admin(username, password) values(?, ?)'
        db.query(sql, [userInfo.username, userInfo.password], (err, results) => {
            if (err) {
                return res.send({
                    status: 3,
                    msg: '注册用户失败，请稍后再试'
                })
            }
            if (results.affectedRows !== 1) {
                return res.send({
                    status: 2,
                    msg: '注册用户失败，请稍后再试！'
                })
            }
        })
        res.send({
            status: 0,
            msg: '注册成功！'
        })
    })
}