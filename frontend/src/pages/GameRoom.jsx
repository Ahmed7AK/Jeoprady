import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import JeopardyTable from "../components/JeopardyTable.jsx";

import connectSocket from '../socket.js'
import "./GameRoom.css"


const Player = ({ name, score }) => {
    return (
        <div className="player">
            <p>{name}</p>
            <p>Score: {score}</p>
        </div>
    )
}

const GameRoom = () => {
    const [players, setPlayers] = useState([]);
    const [round, setRound] = useState([]);
    const [startGame, setStartGame] = useState(false);

    const location = useLocation();
    const roomData = location.state; // Retreives information sent using useNavigate {username, roomID}

    useEffect(() => {
        const socket = connectSocket(roomData);
        socket.emit("joinRoom", roomData);

        socket.on("roomInfo", (room) => {
            setPlayers(room.players);
            if (room.round)
                setRound(room.round)
        })

        

        
        
        // Disconnects from room in order to prevent duplicated users
        return () => {
            socket.off("roomInfo");
            socket.disconnect();
        }
    }, [roomData])


    console.log(startGame)
    return (
        <>
            <p>Game RoomID: {roomData.roomID}</p>
            
            {
                round ? <JeopardyTable jeopardyRound={round} /> : <p>loading...</p>
            }
            {/*Displays the player dashboard alongside the start button when two or more players are in the lobby */}
            <div className="player-dashboard">
                {
                    players.length === 0 ? <p>Waiting for players...</p> : (players.map((player, index) => (<Player key={index} name={player.playerName} score={player.playerScore} />)))
                }
                {
                    players.length >= 2 ? <input onClick={() => { setStartGame(true) }} type="button" value="Start Game" id="start-game" /> : <p>Not enough players</p>
                }
            </div>
        </>
    );
}

export default GameRoom;