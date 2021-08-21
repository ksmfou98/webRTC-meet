import express from "express";
import WebSocket from "ws";
import http from "http";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/")); // /페이지를 제외한 다른 페이지에 들어가게 되면 /페이지로 리다이랙트

const onListen = () => console.log(`Connect ✅ http://localhost:3000`);

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {
  console.log("Connected to Browser ✅");

  socket.addEventListener("close", () =>
    console.log("Disconnected from Browser ❌")
  );

  socket.addEventListener("message", (message) => console.log(message.data));

  socket.send("hello ! Dohyun");
});

server.listen(3000, onListen);
