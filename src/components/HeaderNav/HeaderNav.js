import React from 'react';
import './HeaderNav.scss';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const HeaderNav = () => {
   return (
      <div className="HeaderNav">
         <div className="NavList">
            <Link to="/editor">editor</Link>
            <Link to="/template">template</Link>
            <Link to="/community">community</Link>
            <Link to="/login">login</Link>
         </div>
         <IconContext.Provider value={{ size: '27', className: 'NavMore' }}>
            <div>
               <FaBars />
            </div>
         </IconContext.Provider>
      </div>
   );
};

export default HeaderNav;
