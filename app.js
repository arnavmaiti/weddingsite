const express = require('express')
const app = express()
const port = 80

// Static route
app.use(express.static('public'))

// Listener port
app.listen(port)
