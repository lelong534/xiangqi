import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5173"
  }
});

io.on("connection", (socket) => {
  console.log("connected");

  socket.on('move', (state) => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('move', {
      state: state
    });
  });
});

httpServer.listen(3000);