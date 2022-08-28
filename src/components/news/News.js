import news from './news.module.css'

export default function News() {
    
    return(
    <div className={news.news__card}>
        <div className={news.card__container}>
            <div className={news.card__timeinfo}>
                 <img
                 className={news.clock_img} 
                 src={require('./clock-icon.png')}
                 alt="Clock icon"/><span>3hs de gil</span>
             </div>
            <p className={news.news_p}>Yo estoy puesto pa ti y tu te me quita, diablo, que piquete la chamakita</p>
        </div>
        <div className={news.fav_container}>
            <span>
                <img
                className={news.heart}
                src={require('./empty-heart.png')}
                // src={require('./heart-full.png')} 
                alt="Favourite icon"/>
            </span>
        </div>
    </div>
    
    )
}