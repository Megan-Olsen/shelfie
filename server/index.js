const express = require('express')
const app = express()
const ctrl =require('./controller')

const SERVER_PORT = 4000

app.use(express.json())



app.listen(SERVER_PORT, () => console.log(`Shhhh.... the Dwarves are working on port ${SERVER_PORT}`))