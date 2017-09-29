const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./router')
const app = express()


app.use(morgan('combined'))
app.use(bodyParser.json({type: '*/*'}))

router(app)

const port = process.env.PORT || 3090
app.listen(port)