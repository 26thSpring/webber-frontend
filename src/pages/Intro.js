import React from 'react';
import { IntroTitle } from 'components/IntroTitle';
import { IntroContent } from 'components/IntroContent';
import './Intro.scss';

const Intro = () => {
   return (
      <div className="IntroTemplate">
         <div className="IntroSection">
            <IntroTitle />
            <IntroContent />
         </div>
      </div>
   );
};

export default Intro;
