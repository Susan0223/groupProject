const { Socket } = require('engine.io');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));
// server code goes here!
// first listen for connection using io.on
// then... within callback, use socket.on, socket.emit, socket.broadcast, etc.
// NOTE THAT WE ARE LISTENING WITH server, NOT app!

io.on('connect', socket => {
    // socket reprsents connection w/ specific client
    // socket.id is unique identifier for connected client
    // everytime client connects log it out
    
    console.log(socket.id, 'has just connected');
    // we want to handle any chat message sent to us from a client
    socket.on('click1', data => {
      console.log('got message', data); 
      // send to everyone
      io.emit('click1', data);

    });
    socket.on('click2', data => {
        console.log('got message', data); 
        // send to everyone
        io.emit('click2', data);
  
      });
  });


  
server.listen(3000);