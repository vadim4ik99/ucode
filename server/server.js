
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const RpsGame = require('./rps-game');

const app = express();

const clientPath = `${__dirname}/../client`;
console.log(`server static from ${clientPath}`)

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

let waitingPlayer = null;

io.on('connection', (sock) => {
    if (waitingPlayer){
        // start a game
        //waitingPlayer = null;

        new RpsGame(waitingPlayer, sock);
        waitingPlayer = null;

    }else {
        waitingPlayer = sock;
        waitingPlayer.emit('message', 'Waiting for oponnent')
    }
    

    sock.on('message', (text) =>{
        io.emit('message', text);
    })
})

server.on('error', (err) =>{
    console.log('Serever error: ', err);
});

server.listen(8085, ()=>{
    console.log('Rps start');
});