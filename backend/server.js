import express from "express";
import { Server } from "socket.io";
import http from "http";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

// Intializes express
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {origin: "*"},
})

app.use(express.json()); // Parses JSON
app.use(helmet()); // Helmet is a secure middle ware that set additional security headers
app.use(morgan("dev")); // Logs any requests 


// This checks the .env file and uses it to broadcast the API on a sepcific port
const PORT = process.env.PORT || 3000;

io.on("connection", (socket) => {
    console.log("New user connected:", socket.id);
    socket.on("disconnect", (reason) => {
        console.log("User disconnected:", socket.id, reason)
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})