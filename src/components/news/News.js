import news from './news.module.css'
import Heart from '../heart/Heart'

export default function News({results = []}) {

    return(
    <div className={news.news__card}>
        <div className={news.card__container}>
            <div className={news.card__timeinfo}>
                 <img
                 className={news.clock_img} 
                 src={require('./clock-icon.png')}
                 alt="Clock icon"/><span>3hs de gil</span>
             </div>
             <h3 className={news.news_title}>Esto es un titulo muy feo</h3>
            <p className={news.news_p}>
                Yo estoy puesto pa ti y tu te me quita, diablo, que piquete la chamakita, el corazon lo puso en la neverita si el coso se arma, se queda solita pero esto sigue, veremos que pasa, por favor que no se rompaaa</p>
                <h5 className={news.news_author}>by El Autor ESTO</h5>
        </div>
        <Heart/>
    </div>
    
    )
}