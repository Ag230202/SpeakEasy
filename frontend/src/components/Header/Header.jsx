import { useEffect, useRef, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';   

// import userImg from '../../assets/images/avatar-icon.png';
import { BiMenu } from "react-icons/bi";
import { authContext } from '../../context/AuthContext';   

import { BASE_URL } from '../../config';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
  {
    path:'/todo',
    display:'todo'
  }


  // ... other nav links
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop   
 > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);   

  }, []); // Empty dependency array ensures effect runs only once on mount

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu');
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">   

          {/*====logo====*/}
          <div>
            <img src={logo} alt="" />
          </div>

          {/*=====menu*/}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} className={({   
 isActive }) => isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}>
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*========nav right =====================*/}
          <div className='flex item-center gap-4'>

            {token && user ? (
              <div>
                <Link to={role === 'doctor' ? `${BASE_URL}/doctors/profile/me` : `${BASE_URL}/users/profile/me`}>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer '>
                    <img src={user?.photo} alt="" className='w-full rounded-full'   
 />
                    <h2>{user?.name}</h2>
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to='/login'>
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex justify-center   
 item-center rounded-[50px]'>
                  Login
                </button>
              </Link>
            )}

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </header>   

  );
};

export default Header;