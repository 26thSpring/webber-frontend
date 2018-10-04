import React from 'react';
import { HeaderLogo } from 'components/HeaderLogo';
import { HeaderNav } from 'components/HeaderNav';
import './Header.scss';

const Header = () => {
   return (
      <div className="Header">
         <HeaderLogo />
         <HeaderNav />
      </div>
   );
};

export default Header;
