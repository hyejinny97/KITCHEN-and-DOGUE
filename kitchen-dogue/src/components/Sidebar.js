import '../styles/sidebar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarClose } from '../store';
import { utils, menus } from '../data/sidebar-data';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Sidebar() {
  const dispatch = useDispatch();
  const isOpened = useSelector((state) => {
    return state.sidebar.isOpened;
  });

  const handleClose = function () {
    dispatch(sidebarClose());
  }

  const renderUtils = utils.map(util => {
    return (
      <Link className='Sidebar__util-item' to={util.link} key={util.label}>
        {util.icon}
        <p>{util.label}</p>
      </Link>
    );
  });

  const renderMenus = menus.map(menu => {
    return (
      <Link className='Sidebar__menu-item' to={menu.link} key={menu.label}>
        {menu.label}
      </Link>
    );
  });

  return (
    <div className={`Sidebar ${isOpened ? 'show' : ''}`}>
      <IoCloseSharp className='Sidebar__icon--close' onClick={handleClose} />
      <aside className='Sidebar__container'>
        <section className='Sidebar__userInfo'>
          <p className='Sidebar__userName'>로그인하세요.</p>
          <Link className='Sidebar__signIn' to='/'>로그인</Link>
          <Link className='Sidebar__signUp' to='/'>회원가입</Link>
        </section>
        <section className='Sidebar__util-list'>
          {renderUtils}
        </section>
        <section className='Sidebar__menu-list'>
          {renderMenus}
        </section>
        <section className='Sidebar__cs'>
          <p className='Sidebar__cs-title'>CS CENTER</p>
          <p className='Sidebar__cs-phone'>010-4311-4433</p>
          <div className='Sidebar__cs-time'>
            <p>Open: am 09:00 ~ pm 06:00</p>
            <p>Lunch: am 12:00 ~ pm 01:00</p>
            <p>Sat, Sun, Holiday OFF</p>
          </div>
          <Link className='Sidebar__cs-btn' to='/'>고객센터</Link>
        </section>
      </aside>
    </div>
  );

}

export default Sidebar;