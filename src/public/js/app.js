// ws://localhost:3000 이렇게 해도 되는데 모바일일 경우에는 localhost를 지원하지 않기 떄문에 window객체에서 현재 주소를 가져오도록 설정
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
  console.log(`New message : ${message.data}`);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌");
});

setTimeout(() => {
  socket.send("hello from the browser");
}, 10000);
