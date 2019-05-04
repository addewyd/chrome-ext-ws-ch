const WebSocket = require('ws');

// externsion channel
const wss = new WebSocket.Server({ port: 11101, clientTracking: true })

// client channel
const wss2 = new WebSocket.Server({ port: 11102, clientTracking: true })

var msg = '';

// from client

wss2.on('connection', ws => {

    ws.on('message', message => {
        console.log(`WSS2 Received message => ${message}`)

        // send to extension via wss

        for (let w of wss.clients.values()) {
            w.send(message);
        }

    })
})


// from extension

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`WSS Received message => ${message}`)
        msg = message;
    })
})

