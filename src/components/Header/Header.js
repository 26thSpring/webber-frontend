import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogo } from 'components/HeaderLogo';
import { HeaderNav } from 'components/HeaderNav';
import { GoogleLogout } from 'react-google-login';
import { delete_cookie } from 'sfcookies';
import './Header.scss';

window.document.body.onclick = () => {
   if (localStorage.getItem('webber_user')) {
      window.document.getElementsByClassName('userMenuPositioner')[0] &&
         window.document
            .getElementsByClassName('userMenuPositioner')[0]
            .classList.add('userMenu_disable');
   }
};

const userMenu = () => {
   window.document
      .getElementsByClassName('userMenuPositioner')[0]
      .classList.remove('userMenu_disable');
};
const logout = () => {
   delete_cookie('access_token');
   window.localStorage.clear();
   window.location.replace('/');
};
const getUserThumbnail = () => {
   return JSON.parse(localStorage.getItem('webber_user')).thumbnail;
};
const getUserNickname = () => {
   return JSON.parse(localStorage.getItem('webber_user')).nickname;
};
const thumbnailStyle = {
   width: '2rem',
   height: '2rem'
};

const MenuDiv = ({ Active, onClickHandle }) => {
   let MenuSlide = Active === true ? '0' : '-100%';
   const MenuStyle = {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      backgroundColor: 'rgba(0,0,0,0.8)',
      right: MenuSlide,
      paddingRight: '1.5rem',
      width: '100%',
      height: '100%',
      color: '#eeeeee',
      alignItems: 'flex-end',
      fontSize: '2rem',
      marginTop: '3.2rem',
      zIndex: '99',
      transition: 'all 0.25s ease'
   };

   return (
      <div className="MenuDiv" style={MenuStyle}>
         {!localStorage.getItem('webber_user') && (
            <Link to="/login" onClick={onClickHandle.bind(this)}>
               login
            </Link>
         )}
         <Link to="/editor" onClick={onClickHandle.bind(this)}>
            editor
         </Link>
         <Link to="/template" onClick={onClickHandle.bind(this)}>
            template
         </Link>
         <Link to="/community" onClick={onClickHandle.bind(this)}>
            community
         </Link>
      </div>
   );
};

class Header extends Component {
   state = {
      Active: false
   };
   render() {
      const onClickHandle = () => {
         this.setState({
            Active: !this.state.Active
         });
         //console.log(this.state.Active);
         //console.log(getUserThumbnail());
      };
      return (
         <Fragment>
            <div className="Header">
               <HeaderLogo Active={this.state.Active} />
               <div className="Header_menu">
                  {localStorage.getItem('webber_user') && (
                     <Fragment>
                        <div onClick={userMenu} className="Header_thumbnail">
                           <img
                              src={getUserThumbnail()}
                              alt={getUserNickname()}
                              //   src={null}
                              //   alt="thumb"
                              style={thumbnailStyle}
                           />
                        </div>
                        <div className="userMenuPositioner userMenu_disable">
                           <div className="rotated-square" />
                           <div className="user-menu">
                              <Link
                                 to={`/profile/${getUserNickname()}`}
                                 className="user-profile"
                              >
                                 profile
                              </Link>
                              <div
                                 onClick={logout}
                                 className="HeaderNav_Googlelogout"
                              >
                                 logout
                              </div>
                              {JSON.parse(localStorage.getItem('webber_user'))
                                 .auth === 1 && (
                                    <div className="admin">
                                       <a href="http://localhost:9090/admin">
                                       admin
                                       </a>
                                    </div>
                                 )}
                           </div>
                        </div>
                     </Fragment>
                  )}
                  <HeaderNav
                     onClickHandle={onClickHandle}
                     className="Header_Nav"
                  />
               </div>
            </div>
            <MenuDiv Active={this.state.Active} onClickHandle={onClickHandle} />
         </Fragment>
      );
   }
}
export default Header;
