import dropdown from './dropdown.module.css'

export default function Vuejs() {
    return(
        <>
        <img className={dropdown.icon_img} 
        src={require('./vue-icon.png')}
        alt="Vuejs Logo"/>
        <a className={dropdown.content_a}>Vuejs</a>
        </>
    )
}