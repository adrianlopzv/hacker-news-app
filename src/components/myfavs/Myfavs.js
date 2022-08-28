import myfavs from './myfavs.module.css'
import {NavLink} from 'react-router-dom'

export default function Myfavs() {
    return(
    <div className={myfavs.mainbuttons__container}>
        <NavLink to='/'>
        <button className={myfavs.main_button}>All</button>
        </NavLink>
        <button className={myfavs.myfavs_button}>Myfaves</button>
    </div>
    )
}