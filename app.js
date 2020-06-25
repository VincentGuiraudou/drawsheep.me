var app = require("express")(),
  server = require("http").createServer(app),
  io = require("socket.io").listen(server),
  ent = require("ent"),
  favicon = require("serve-favicon");
var nbrPlayers = 0;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.sockets.on("connection", function(socket) {
  nbrPlayers++;
  socket.emit("connection", nbrPlayers);
  socket.broadcast.emit("connection", nbrPlayers);

  socket.on("newPlayer", function(pseudo) {
    pseudo = ent.encode(pseudo);
    socket.pseudo = pseudo;
    socket.broadcast.emit("newPlayer", pseudo);
  });

  socket.on("message", function(message) {
    message = ent.encode(message);
    socket.broadcast.emit("message", {
      pseudo: socket.pseudo,
      message: message
    });
  });
});

server.listen(8080);
