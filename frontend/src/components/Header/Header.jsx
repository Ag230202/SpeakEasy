import { useContext, useEffect, useRef } from 'react';
import logo from '../../assets/images/logo_Websit_copy.jpg';
import { NavLink, Link } from 'react-router-dom';

import { BiMenu } from "react-icons/bi";
import {authContext } from '../../context/AuthContext.jsx';
import HashLoader from 'react-spinners/HashLoader';
import { useState } from 'react';

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
    path: '/todo',
    display: 'Todo'
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const {user,role,token}=useContext(authContext)
  const [loading, setLoading] = useState(false);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }); // Add closing parenthesis

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu');
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/*====logo====*/ }
          <div>
          <img src={logo} alt="Logo" style={{ width: '490px', height: '100px' }} />     </div>

          {/*=====menu*/ }
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.path} 
                      className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}>
                      {link.display}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          {/*========nav right*/ }
          <div className='flex item-center gap-4'>

          {
            token && user ?  <div>
            <Link to={`${role=='doctor'?'/doctors/profile/me': '/users/profile/me'
          }`}>
              <figure className='w-[35px] h-[35px] rounded-full cursor-pointer '>
                <img src={user?.photo} className='w-full rounded-full' alt="" />
              </figure>
              
            </Link>
          </div>:
         
          <Link to='/login'>
         <button className='bg-primaryColor  py-2 px-6 text-white font-[600] h-[44px] flex justify-center item-center   rounded-[50px]'>
             {loading ?<HashLoader size={25} color='#fff'/> :'Login'}
            </button>
          </Link>
          }
            
           
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