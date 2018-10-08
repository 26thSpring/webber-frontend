import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogo } from 'components/HeaderLogo';
import { HeaderNav } from 'components/HeaderNav';
import './Header.scss';

// const SetTime = ({ Active }) => {
//       let SetTimeLink = Active === true ?
// };

const MenuDiv = ({ Active, onClickHandle }) => {
   let MenuStyleRight = Active === true ? '0' : '-100%';
   const MenuStyle = {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      backgroundColor: 'rgba(0,0,0,0.8)',
      //top: MenuStyleRight,
      right: MenuStyleRight,
      paddingRight: '1.5rem',
      width: '100%',
      height: '100%',
      color: '#eeeeee',
      alignItems: 'flex-end',
      fontSize: '2rem',
      marginTop: '2.7rem',
      zIndex: '99',
      transition: 'all 0.25s ease'
   };
   return (
      <div className="MenuDiv" style={MenuStyle}>
         <Link to="/editor" onClick={onClickHandle.bind(this)}>
            editor
         </Link>
         <Link to="/template" onClick={onClickHandle.bind(this)}>
            template
         </Link>
         <Link to="/community" onClick={onClickHandle.bind(this)}>
            community
         </Link>
         <Link to="/login" onClick={onClickHandle.bind(this)}>
            login
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
         console.log(this.state.Active);
      };

      return (
         <Fragment>
            <div className="Header">
               <HeaderLogo />
               <HeaderNav onClickHandle={onClickHandle} />
            </div>
            <MenuDiv Active={this.state.Active} onClickHandle={onClickHandle} />
         </Fragment>
      );
   }
}
export default Header;
