import news from './news.module.css'
import Heart from '../heart/Heart'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function News({results}) {

    return(
    <>
    <InfiniteScroll 
    dataLength={results.length} 
    next={() => setPage (page + 1)}
    hasMore={true} 
    style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}
    scrollableTarget="scrollableDiv">
    {   results.map(item => (
        <div key={item.created_at_i} className={news.news__card}>
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
        <Heart/>
        </div>
        ))
        }
        </InfiniteScroll>
    </>
    )
}