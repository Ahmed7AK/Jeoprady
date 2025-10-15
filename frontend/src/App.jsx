import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx'; 
import GameRoom from './pages/GameRoom.jsx'
import './App.css'


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/room/:roomid' element={<GameRoom />}/>
      </Routes>
    </>
  )

}

export default App;
