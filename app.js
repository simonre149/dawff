require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.set('view engine', 'pug');
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'DAWFF',
        version: process.env.VERSION
    });
});

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT);
});
