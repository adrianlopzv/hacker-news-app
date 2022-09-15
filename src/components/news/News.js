import news from './news.module.css'
import Heart from '../heart/Heart'

export default function News({results, onFav, favourites}) {
    console.log("onFav", onFav)

    return(
    <>
        <div className={news.news__maincontainer}>
    {   results.map(item => (
        <div key={item.objectID} className={news.news__card}>
        <a href={item.story_url} 
        target="_blank" className={news.no_a}>
            <div className={news.card__container}>
            <div className={news.card__timeinfo}>
                 <img
                 className={news.clock_img} 
                 src={require('./clock-icon.png')}
                 alt="Clock icon"/><span>{item.created_at}</span>
             </div>
             <h3 className={news.news_title}>
                {item.story_title}</h3>
                <h5 className={news.news_author}>by {item.author}</h5>
        </div>
        </a>
        <Heart onClick={() => 
        onFav(item.objectID, !favourites[item.objectID])} 
        liked={favourites[item.objectID]}/>
        </div>
        ))
        }
        </div>
    </>
    )
}