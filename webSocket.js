const http = require('http')
const express = require('express')
const fs = require('fs')

const app = express();

const server = http.createServer(app)

const wss = new (require('ws')).Server({ server })

const clients = new Set();

wss.on("connection", (ws) => {
  console.log("wss")

  clients.add(ws)

  ws.on('message', (message) => {
    console.log(message)
  
    let messages = require('./messages.json')
  
    messages.push(message)
  
    let jsonMessages = JSON.stringify(messages)
    fs.writeFileSync('./messages.json', jsonMessages)
    
    clients.forEach(item => {
      item.send(message)
    })
  })
  
  ws.on('close', () => {
    clients.delete(ws)
  })
})

server.listen(3001, () => {
  console.log("WebSocket запущены")
})