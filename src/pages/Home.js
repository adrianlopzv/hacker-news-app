import All from "../components/all/All"
import Dropdown from "../components/dropdown/Dropdown"
import News from "../components/news/News"
import news from "../components/news/news.module.css"

export default function Home() {
    return (
        <div>
            <All/>
            <Dropdown/>
            <div className={news.news__maincontainer}>
                <News/><News/><News/><News/>
            </div>
        </div>
    )
}
