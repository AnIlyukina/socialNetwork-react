import { NavLink } from 'react-router-dom';
import './NavBar.scss'

function NavBar (){
  return(
    <nav className='nav-bar'>
      <ul className='nav-bar__links'>
        <li> <NavLink className='nav-bar__link' to='/profile'> Профиль </NavLink></li>
        <li><NavLink className='nav-bar__link' to='/dialogs'> Сообщения </NavLink></li>
        <li><NavLink className='nav-bar__link' to='/news'> Новости </NavLink></li>
        <li><NavLink className='nav-bar__link' to='/music'> Музыка </NavLink></li>
        <li><NavLink className='nav-bar__link' to='/settings'> Настройки </NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;