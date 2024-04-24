// https://socket.io/get-started/chat/
//https://www.tutorialspoint.com/socket.io/
//https://stackoverflow.com/questions/10342681/whats-the-difference-between-io-sockets-emit-and-broadcast
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  socket.on('chat_message', function(msg){
    //console.log('message: ' + msg);
    io.emit('chat_message', msg);
  });

  //console.log('a user connected : ' + socket.id);
  socket.on('disconnect', function(){
    console.log('user disconnected ' + socket.id);
  });
});



http.listen(3000, () => {
  console.log('listening on *:3000')
})



  //  1. npm init -y
  //  2. npm install express socket.io
  //  3. write the server
