import React from 'react';
import './EditorNav.scss';
import { BoxModel } from 'components/BoxModel';
import { BInputModel } from 'components/BInputModel';

const EditorNav = () => {
   return (
      <div className="EditorNav">
         <BoxModel />
         <BInputModel />
      </div>
   );
};

export default EditorNav;
