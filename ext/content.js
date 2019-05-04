console.log('CS0');

var port = chrome.runtime.connect();
port.postMessage({msg:'MSG!'});


port.onMessage.addListener(function(msg) {
    console.log('from back', msg);
    var el = document.getElementById('msg');
    el.textContent = msg.msgdata;
});


