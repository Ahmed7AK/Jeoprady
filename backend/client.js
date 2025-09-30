import { io } from "socket.io-client";

const CLIENT_URL = "https://jeoprady-production.up.railway.app/";

const socket = io(CLIENT_URL);
socket.on("connect", () => {
    console.log("connected to server");
})