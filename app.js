const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))

const router = require('./router/router')
app.use('/api', router)


app.listen(8081, () => {
    console.log('api server running at http://127.0.0.1:8081')
})