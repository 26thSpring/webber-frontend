import React from 'react';
import './EditorHeader.scss';
import { HeaderLogo } from 'components/HeaderLogo';

const EditorHeader = () => {
   return (
      <div className="EditorHeader">
         <div className="EditorHeader_title">
            <HeaderLogo />
            <div className="EditorHeaderTitle">webber Editor</div>
         </div>
         <div className="EditorHeader_btns">
            <div className="EditorHeader_btn_download">download</div>
            <div className="EditorHeader_btn_save">save</div>
            <div className="EditorHeader_btn_nav">save</div>
         </div>
      </div>
   );
};

export default EditorHeader;
