import heart from './heart.module.css'
import React from 'react'

export default function Heart() {
    
    const [state, setLike] = React.useState(false)

    console.log(state)
    const onLike = () => setLike(!state)

    return(
        <div 
        onClick={onLike}
        className={heart.fav_container}>
            <span className={
                state ? heart.heart_fully : heart.heart_empty}>
            </span>
        </div>
    )
}