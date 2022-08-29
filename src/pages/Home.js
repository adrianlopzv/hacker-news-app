import { useEffect, useState } from 'react';
import All from "../components/all/All"
import Dropdown from "../components/dropdown/Dropdown"
import News from "../components/news/News"
import news from "../components/news/news.module.css"

export default function Home() {
    const [results, setResults] = useState([])
    const searchUrl = "http://hn.algolia.com/api/v1/search_by_date?query="

    const searchByDate = async () => {
    const data = await fetch(searchUrl)
    const posts = await data.json()
    setResults(posts.hits)
    }
  
    useEffect(() => {
    searchByDate(searchUrl)
    },[])

    return (
        <div>
            <All/>
            <Dropdown/>
            <div className={news.news__maincontainer}>
                <News results={results}/>
            </div>
        </div>
    )
}
