import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'


function Navbar() {
  const [clickNav, setclickNav] = useState(false);
  const showSidebar = () => {
    setclickNav(!clickNav);
  }
  
  const [scroll, setScroll] = useState(false);
  
  window.onscroll = function(){
      const Navbar = document.querySelector('#navbar');
      // const hiroImg = document.querySelector("#hiro-img")
      const fixedNav = Navbar.offsetTop;

    if(window.pageYOffset > fixedNav){
      setScroll(true);
    }else{
      setScroll(false)
    }
  }
  return (
      <>
      <div>
       <div className={scroll ? "nav-fixed" : "no-fixed"} id="navbar">
         <div className='flex w-[14em] h-[5em] items-center '>
            <img src={Logo} alt="logo bakesbangpol kota binjai" className='w-max'/>
          </div>
          <section className="hamburger-menu w-20 flex-col space-y-1 lg:hidden" onClick={showSidebar}>
            <div className={clickNav ? "rotate-two":"no-rotate"}></div>
            <div className={clickNav ? "hideNav":"no-rotate"}></div>
            <div className={clickNav ? "rotate-one":"no-rotate"}></div>
          </section>
            <nav className={clickNav ? 'sideBar-active' : 'sideBar-hide'} id="navigasi">
              <ul className='space-y-6 flex flex-col items-start lg:flex-row  text-xl ml-6 w-screen lg:w-full h-screen z-[99]  text-white lg:relative lg:justify-evenly lg:space-y-0 lg:space-x-5' id="list-navigasi" >
                <li><Link to="/"  onClick={showSidebar}>HOME</Link></li>
                <li><Link to="/profil"  onClick={showSidebar}>PROFIL</Link></li>
                <li><Link to="/layanan" href="#layanan"  onClick={showSidebar}>LAYANAN</Link></li>
                <li><a href="#kontak" onClick={showSidebar}>KONTAK</a></li>
              </ul>
            </nav>
       </div>
      </div>
      </>

     );
   }

export default Navbar;