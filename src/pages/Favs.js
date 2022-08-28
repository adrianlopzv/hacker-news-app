import Myfavs from "../components/myfavs/Myfavs"
import News from "../components/news/News"
import news from "../components/news/news.module.css"

export default function Favs() {
    return(
        <div>
            <Myfavs/>
            <div className={news.news__maincontainer}>
                <News/><News/><News/><News/>
            </div>
        </div>
    )
}