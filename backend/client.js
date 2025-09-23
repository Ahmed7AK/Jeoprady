import { io } from "socket.io-client";

const CLIENT_URL = "ws://localhost:3000/";

const socket = io(CLIENT_URL);
socket.on("connect", () => {
    console.log("connected to server");
})