
/*  NavBar is the basic top header part, which contains the About, Work and Contact information about the developer. 
    Here we will give the name of the developer, logo and also a top skill at the top.
*/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`
      ${styles.paddingX} w-full flex 
      items-center py-5 fixed top-0 z-20
      bg-primary`}
    >
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link 
        to="/" // will direct to the top of the page
        className="flex items-center gap-2"
        onClick={ () => {
          setActive(""); // this will keep track about where we are on the page so we create a new useState field.
          window.scrollTo(0,0);
        }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font bold cursor-pointer flex"> Harsh &nbsp;
          <span className="sm:block hidden"> | &nbsp;Portfolio </span> </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (             // declaring a JS function to call the items of Navbar from navlinks and ordering into a map, so that it is clearly visible on the navbar in the screen
            
            <li key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer
              `}
              onClick={() => setActive(link.title)}   // setting the onclick feature over the navbar options

            >
              <a href={`#${link.id}`} > {link.title}</a>   
            </li>

          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-ceter" /* 'sm' means for small devices, 
              here we are creating the toggle menu which appears when the screen is minimized or made very small,
              below functions is for mobile menu. */ >
          <img 
          src={toggle ? close : menu} alt="menu" 
          className="w-[28px] h-[28px] object-contain cursor-pointer "
          onClick={() => setToggle(!toggle)}
          />
          
          <div className={`${!toggle ? 'hidden' : 'flex' } /* if the menu is not toggled before, then it will not show the menu else it will show the menu */
                 p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-0 rounded-xl`}>
          
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (             // declaring a JS function to call the items of Navbar from navlinks and ordering into a map, so that it is clearly visible on the navbar in the screen
            
              <li key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] 
                `}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);   // setting the onclick feature over the navbar options
                }}
              >
               <a href={`#${link.id}`} > {link.title}</a>   
              </li>

            ))}
            </ul>
           </div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar