import React from 'react';
import './IntroContent.scss';
import { Link } from 'react-router-dom';

const IntroContent = () => {
   return (
      <div className="IntroContent flex-column-center">
         <span>Make easy,</span>
         <span>Save time.</span>
         <Link className="editorLink" to="/editor">
            Open editor
         </Link>
      </div>
   );
};

export default IntroContent;
