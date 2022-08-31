import dropdown from './dropdown.module.css'

export default function Angular() {
    return(
        <>
        <img className={dropdown.icon_img} 
        src={require('./angular-icon.png')} 
        alt="Angular Logo"/>
        <a className={dropdown.content_a}>Angular</a>
        </>
    )
}