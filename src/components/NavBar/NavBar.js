import './NavBar.scss'

function NavBar (){
  return(
    <nav className='nav-bar'>
      <ul className='nav-bar__links'>
        <li> <a className='nav-bar__link' href='#'> Профиль </a></li>
        <li><a className='nav-bar__link' href='#'> Сообщения </a></li>
        <li><a className='nav-bar__link' href='#'> Новости </a></li>
        <li><a className='nav-bar__link' href='#'> Музыка </a></li>
        <li><a className='nav-bar__link' href='#'> Настройки </a></li>
      </ul>
    </nav>
  )
}

export default NavBar;