import React, { Fragment } from 'react';
import './HeaderNav.scss';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const HeaderNav = ({ onClickHandle }) => {
   return (
      <Fragment>
         <div className="HeaderNav">
            <div className="NavList">
               <Link to="/Admin">admin</Link>
               <Link to="/editor">editor</Link>
               <Link to="/template">template</Link>
               <Link to="/community">community</Link>
               <Link to="/login">login</Link>
            </div>
            <IconContext.Provider value={{ size: '27', className: 'NavMore' }}>
               <FaBars onClick={onClickHandle.bind(this)} />
            </IconContext.Provider>
         </div>
      </Fragment>
   );
};

export default HeaderNav;
