import { useState } from 'react'
import './MainPage.css'
import logo from "../assets/logo.png"

const MainPage = () => {

    const [roomData, setRoomData] = useState({
        username: '',
        roomID: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(roomData);
    }
    
    return (
        <>
            <div className='main-page'>
                <div className='title'>
                    <img src={logo} alt="" />
                    <h1>THE GAME</h1>
                </div>
                <form onSubmit={handleSubmit} className='join-options'>
                    <div className='input-field'>
                        <p>Enter your username:</p>
                        <input value={roomData.username} onChange={(e) => setRoomData({ ...roomData, username: e.target.value })} type="text" name="" id="username" required />
                    </div>
                    <div className='input-field'>
                        <p>Join Room:</p>
                        <input value={roomData.roomID} onChange={(e) => setRoomData({ ...roomData, roomID: e.target.value })} type="text" name="" id="room-id" required />
                    </div>
                    <input id='join-room' type="submit" value="Join Room" />
                </form>
            </div>
        </>
    )
}
export default MainPage;