
var port = undefined;

var socket = new WebSocket('ws://localhost:11101');

socket.onopen = (e) =>  {
    console.log('wss open', e);
    socket.send('ext connect');
}

socket.onerror = (e) =>  console.log(e);

socket.onmessage = (m) =>  {
    console.log('wss message', m.data);
    console.log('port here:', port);
    if(port) {
        port.postMessage({msgdata: m.data});
    }
}



var onmsg = function(msg) {
    console.log('message from content', msg);
}

var onconn = function(p) {
    port = p;
//    console.log('port', p);
    port.onMessage.addListener(onmsg);

}

chrome.runtime.onConnect.addListener(onconn);


