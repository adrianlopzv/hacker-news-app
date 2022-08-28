import all from './all.module.css'
import {NavLink} from 'react-router-dom'

export default function All() {
    return(
     <div className={all.mainbuttons__container}>
        <button className={all.all_button}>All</button>
        <NavLink to='/favs'>
        <button className={all.main_button}>Myfaves</button>
        </NavLink>
    </div>
    )
    
}