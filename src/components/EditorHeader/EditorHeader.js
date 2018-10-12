import React from 'react';
import './EditorHeader.scss';
import { HeaderLogo } from 'components/HeaderLogo';
import { MdMoreVert } from 'react-icons/md';
import { IconContext } from 'react-icons';

const EditorHeader = () => {
   return (
      <div className="EditorHeader">
         <div className="EditorHeader_title">
            <HeaderLogo />
            <div className="EditorHeaderTitle">webber Editor</div>
         </div>
         <div className="EditorHeader_btns">
            <div className="EditorHeader_btn_download">다운로드</div>
            <div className="EditorHeader_btn_save">저장하기</div>
            <IconContext.Provider
               value={{ size: 27, className: 'EditorHeader_btns_more' }}
            >
               <MdMoreVert />
            </IconContext.Provider>
         </div>
      </div>
   );
};

export default EditorHeader;
