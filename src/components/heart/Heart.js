import heart from './heart.module.css'
import React from 'react'

export default function Heart({liked, onClick}) {
    

    return(
        <div 
        onClick={onClick}
        className={heart.fav_container}>
            <span 
            className={liked ? heart.heart_fully : heart.heart_empty}>
            </span>
        </div>
    )
}