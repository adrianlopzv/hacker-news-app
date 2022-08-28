import header from './header.module.css'
import {NavLink} from 'react-router-dom'

export default function Header() {
    return(
        <header>
            <nav className={header.header_nav}>
            <NavLink to='/'>
                <img className={header.nav_logo}
                src={require('./hacker-news-logotipo.png')} 
                alt="Hacker News logotype"/>
            </NavLink>
        </nav>
        </header>
    )
}