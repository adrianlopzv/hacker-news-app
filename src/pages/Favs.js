import Myfavs from "../components/myfavs/Myfavs"
import news from "../components/news/news.module.css"

export default function Favs() {
    return(
        <div>
            <Myfavs/>
            <div className={news.news__maincontainer}>
            
            </div>
        </div>
    )
}