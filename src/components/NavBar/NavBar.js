import { NavLink } from 'react-router-dom';
import './NavBar.scss'

function NavBar (){
  return(
    <nav className='nav-bar'>
      <ul className='nav-bar__links'>
        <li>
          <NavLink className='nav-bar__link' to='/profile'>
            <img className='nav-bar__link-image' src='http://cdn.onlinewebfonts.com/svg/img_164788.png'/>
            Профиль 
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-bar__link' to='/dialogs'>
            <img className='nav-bar__link-image' src='http://cdn.onlinewebfonts.com/svg/download_137863.png'/> 
            Сообщения 
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-bar__link' to='/news'> 
            <img className='nav-bar__link-image' src='http://cdn.onlinewebfonts.com/svg/img_408068.png'/> 
            Новости 
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-bar__link' to='/music'> 
            <img className='nav-bar__link-image' src='http://cdn.onlinewebfonts.com/svg/img_550748.png'/> 
            Музыка 
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-bar__link' to='/settings'> 
            <img className='nav-bar__link-image' src='http://cdn.onlinewebfonts.com/svg/download_415220.png'/> 
            Настройки 
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;