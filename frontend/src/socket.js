import { io } from "socket.io-client";


const CLIENT_URL = "https://jeoprady-production.up.railway.app/"; // Must be changes when in production

// Takes room data submitted through a form and connects to a room
const  connectSocket = () => {
    const socket = io(CLIENT_URL);
    console.log("connected to server");

    return(socket);
    
}
export default connectSocket;
