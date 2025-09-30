import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx'; 
import './App.css'


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
      </Routes>
    </>
  )

}

export default App;
