import React, { Fragment } from 'react';
import './HeaderNav.scss';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { GoogleLogout } from 'react-google-login';

// const logout = () => {
//    localStorage.clear('webberUser');
// };

// const getUserThumbnail = () => {
//    return JSON.parse(localStorage.getItem('webberUser')).result.result[0]
//       .thumbnail;
// };
// const getUserNickname = () => {
//    return JSON.parse(localStorage.getItem('webberUser')).result.result[0]
//       .nickname;
// };
// const thumbnailStyle = {
//    width: '1.8rem',
//    height: '1.8rem'
// };

// const userMenu = () => {
//    window.document
//       .getElementsByClassName('userMenuPositioner')[0]
//       .classList.toggle('userMenu_disable');

//    //console.log(window.document.getElementsByClassName('userMenuPositioner')[0]);
// };

const HeaderNav = ({ onClickHandle }) => {
   return (
      <Fragment>
         <div className="HeaderNav">
            <div className="NavList">
               <Link to="/editor">editor</Link>
               <Link to="/template">template</Link>
               <Link to="/community">community</Link>
               {/* //   <div className="userButton" onClick={userMenu}>
               //      <img
               //         src={getUserThumbnail()}
               //         alt={getUserNickname()}
               //         style={thumbnailStyle}
               //      />
               //   </div> */}
               {!localStorage.getItem('webberUser') && (
                  <Link to="/login">login</Link>
               )}
            </div>
            <IconContext.Provider value={{ size: '27', className: 'NavMore' }}>
               <FaBars onClick={onClickHandle.bind(this)} />
            </IconContext.Provider>
         </div>
         {/* <div className="userMenuPositioner userMenu_disable">
            <div className="rotated-square" />
            <div className="user-menu">
               <Link to="/Profile" className="user-profile">
                  profile
               </Link>
               <GoogleLogout
                  onLogoutSuccess={logout}
                  tag="div"
                  className="HeaderNav_Googlelogout"
               >
                  logout
               </GoogleLogout>
            </div>
         </div> */}
      </Fragment>
   );
};

export default HeaderNav;
