import '../styles/navbar.scss';
import logo from '../assets/logo.png'
import { useDispatch } from 'react-redux';
import { sidebarOpen } from '../store';
import { menus, utils } from '../data/navbar-data';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  const dispatch = useDispatch();
  const handleOpen = function () {
    dispatch(sidebarOpen());
  }

  const renderMenus = menus.map(menu => {
    return <li className='Navbar__menu-item' key={menu.label}>
      <NavLink to={menu.link}>{menu.label.toUpperCase()}</NavLink>
    </li>
  })

  const renderUtils = utils.map(util => {
    return <li className='Navbar__util-item' key={util.label}>
      <NavLink to={util.link}>{util.label.toUpperCase()}</NavLink>
    </li>
  })

  return (
    <nav className='Navbar'>
      <RxHamburgerMenu className='Navbar__icon Navbar__icon--burger' onClick={handleOpen} />
      <ul className='Navbar__menu-list'>
        {renderMenus}
      </ul>
      <img className='Navbar__logo' src={logo} alt='logo' />
      <ul className='Navbar__util-list'>
        {renderUtils}
      </ul>
      <BsSearch className='Navbar__icon Navbar__icon--search' />
    </nav>
  );
}

export default Navbar;