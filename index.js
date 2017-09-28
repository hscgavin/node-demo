const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()


app.use(morgan('combined'))
app.use(bodyParser.json({type: '*/*'}))

const port = process.env.PORT || 3090
app.listen(port)