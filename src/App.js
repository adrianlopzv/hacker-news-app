import './App.css';
import {Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import News from './components/news/News';
import Angular from './components/dropdown/Angular';
import React from './components/dropdown/React';
import Vuejs from './components/dropdown/Vuejs';
import dropdown from './components/dropdown/dropdown.module.css'

export default function App() {
    const [results, setResults] = useState([])
    const [techs, setTech] = useState({
      search: true,
      angular: false,
      react: false,
      vuejs: false,
    })
    
    const searchUrl = "http://hn.algolia.com/api/v1/search_by_date?query="
    const angularUrl = "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0"
    const reactUrl = "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0"
    const vuejsUrl = "https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0"

    const searchByDate = async () => {
      const data = await fetch(searchUrl)
      const posts = await data.json()
      setResults(posts.hits)
    }

    const searchAngular = async () => {
      const data = await fetch(angularUrl)
      const posts = await data.json()
      setResults(posts.hits)
    }

    const searchReact = async () => {
      const data = await fetch(reactUrl)
      const posts = await data.json()
      setResults(posts.hits)
    }

    const searchVuejs = async () => {
      const data = await fetch(vuejsUrl)
      const posts = await data.json()
      setResults(posts.hits)
    }
  
     const angularNews = () => {
        setTech({
          ...techs,
          angular: true,
          search: false,
          react: false,
          vuejs: false,
        })
        searchAngular()
     }

     const reactNews = () => {
      setTech({
        ...techs,
        react: true,
        search: false,
        angular: false,
        vuejs: false,
      })
      searchReact()
     }

     const vuejsNews = () => {
      setTech({
        ...techs,
        vuejs: true,
        search: false,
        react: false,
        angular: false,
      })
      searchVuejs()
     }

     useEffect(() => {
      // if(!techs.angular){
      //   searchAngular()
      // } else if (!techs.react) {
      //   searchReact()
      // } else if (!techs.vuejs) {
      //   searchVuejs()
      // } else{
      searchByDate()
      console.log(techs.angular, techs.react, techs.search)
      } 
     ,[techs])

  return (
    <>
    <Routes>
       <Route index element={<Home/>}/>
    </Routes> <div className={dropdown.dropmenu__container}>
        <div className={dropdown.dropdown_menu}>
            <button className={dropdown.drop_btn}>
                <span 
                className={dropdown.btn__text}>
                    Select your news
                </span>
                <span className={dropdown.btn__icon}>
                <img className={dropdown.arrow_img} 
                src={require('./components/dropdown/arrow-down.png')}
                alt="Drop down arrow"/>
                </span>
            </button>
            <div className={dropdown.dropdown_content}>
                <span className={dropdown.span_content}
                onClick={angularNews}>
                <Angular/>
                </span>
                <span className={dropdown.span_content}
                onClick={reactNews}>
                <React/>
                </span>
                <span className={dropdown.span_content}
                onClick={vuejsNews}>
                <Vuejs/>
                </span>
            </div>
        </div>  
    </div>
    <News results={results}/>
    </>
  )
}
