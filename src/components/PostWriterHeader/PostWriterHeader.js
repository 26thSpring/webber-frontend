import React from 'react';
import './PostWriterHeader.scss';
import { MdArrowBack } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const PostWriterHeader = ({ onTitleChange, onOutPage, onSubmit }) => {
   return (
      <div className="PostWriterHeader">
         <Link
            to="/community"
            onClick={onOutPage.bind(this)}
            className="PostWriterHeader_btn_back"
         >
            <IconContext.Provider
               value={{ size: '33', color: 'rgba(255, 255, 255, 0.8)' }}
            >
               <MdArrowBack />
            </IconContext.Provider>
         </Link>
         <input
            type="text"
            className="PostWriterHeader_title"
            name="title"
            placeholder="제목을 입력하세요."
            onInput={onTitleChange.bind(this)}
         />
         <div className="PostWriterHeader_btns">
            <div
               onClick={onSubmit.bind(this)}
               className="PostWriterHeader_btn_submit"
            >
               작성하기
            </div>
         </div>
      </div>
   );
};

export default PostWriterHeader;
