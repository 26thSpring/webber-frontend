import React from 'react';
import './HeaderLogo.scss';
import { Link } from 'react-router-dom';

const HeaderLogo = ({ onClickHandle }) => {
   return (
      <Link to="/" className="HeaderLogo">
         W
      </Link>
   );
};

export default HeaderLogo;
