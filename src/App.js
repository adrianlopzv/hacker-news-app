import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Favs from './pages/Favs';
import Home from './pages/Home';
import Header from './components/header/Header';

export default function App() {

  const [results, setResults] = useState([])
  const searchUrl = "http://hn.algolia.com/api/v1/search_by_date?query="

  function searchByDate(){
    fetch(searchUrl)
    .then((response) => response.json())
    .then((data) => setResults(data.hits))
  }

  useEffect(() => {
    searchByDate(searchUrl)
  },[])

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
