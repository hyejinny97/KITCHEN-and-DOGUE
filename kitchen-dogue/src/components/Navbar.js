import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import '../styles/navbar.scss';
import logo from '../assets/logo.png'

function Navbar() {
  const menus = [
    { label: 'KITCHEN AND DOGUE', link: '/company' },
    { label: 'JERKY', link: '/goods/catalog?category=jerky' },
    { label: 'BAR', link: '/goods/catalog?category=bar' },
    { label: 'PORRIDGE', link: '/goods/catalog?category=porridge' },
  ];

  const utils = [
    { label: 'Login' },
    { label: 'Join' },
    { label: 'Cart' },
    { label: 'MyPage' },
    { label: 'CS Center' },

  ]

  const renderMenus = menus.map(menu => {
    return <li className='Navbar__menu-item' key={menu.label}>
      <NavLink to={menu.link}>{menu.label.toUpperCase()}</NavLink>
    </li>
  })

  const renderUtils = utils.map(util => {
    return <li className='Navbar__util-item' key={util.label}>
      {util.label.toUpperCase()}
    </li>
  })

  return (
    <nav className='Navbar'>
      <RxHamburgerMenu className='Navbar__icon Navbar__icon--burger' />
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