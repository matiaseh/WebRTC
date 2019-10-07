const api = require('express').Router()
const ioServer = require('../socket')
const io = ioServer.io

api.get('/viewers', async (req, res) => {
  const views = io.engine.clientsCount

  const data = {
    views: views
  }

  res.status(200).send(JSON.stringify(data))
})

console.log(`WebSocket is open on port: ${ioServer.PORT}`)

io.listen(ioServer.PORT)

module.exports = api