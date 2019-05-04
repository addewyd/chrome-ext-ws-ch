const WebSocket = require('ws');

var ws = new WebSocket('ws://localhost:11102');
var txt = 'Standalone client'
ws.onopen = (e) =>  {
    ws.send('msg from stcl: ' + txt);
}
