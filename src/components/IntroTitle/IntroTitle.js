import React from 'react';
import './IntroTitle.scss';

const IntroTitle = () => {
   return (
      <div className="IntroTitle">
         <span>webber</span>
         <span className="flex-row-center">
            <span style={{ marginRight: '0.7rem' }}>web editor</span>
            <div className="HeaderLogo">W</div>
         </span>
      </div>
   );
};

export default IntroTitle;
