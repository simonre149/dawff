'use strict';
// Socket connection
var socket = io.connect();

// Canvas setup
var canvas = document.getElementById('canvas');
var canvasContext = canvas.getContext('2d');
canvasContext.fillStyle = 'grey';
canvasContext.fillRect(0, 0, canvas.width, canvas.height);