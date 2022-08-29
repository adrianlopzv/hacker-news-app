import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Favs from './pages/Favs';
import Header from './components/header/Header';
import Home from './pages/Home';

export default function App() {

  return (
    <BrowserRouter>
    <Header/>  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favs' element={<Favs/>}/>
    </Routes>
    </BrowserRouter>
      
  )
}
