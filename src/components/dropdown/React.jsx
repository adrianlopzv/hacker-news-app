import dropdown from './dropdown.module.css'

export default function React() {
    return(
        <>
        <img className={dropdown.icon_img} 
        src={require('./react-icon.png')}
        alt="React Logo"/>
        <a className={dropdown.content_a}>React</a>
        </>
    )
}