import React from 'react';
import './PostViewHeader.scss';
import { IconContext } from 'react-icons';
import { GoComment } from 'react-icons/go/';

const PostViewHeader = ({ data }) => {
   //console.log('postheader : ' + data.replyNum);
   const {
      board_Id,
      nickname,
      title,
      content,
      views,
      regdate,
      replyNum,
      type,
      thumbnail,
      replies
   } = data;
   return (
      <div className="PostViewHeader">
         <div className="PostViewHeader_Head">
            <div className="PostViewHeader_thumbnail">
               <img src={thumbnail} alt={nickname} />
            </div>
            <div className="PostViewHeader_nickName">{nickname}</div>
         </div>

         <div className="PostViewHeader_title">{title}</div>

         <div className="PostViewHeader_info">
            <div className="PostViewHeader_regDate_value">{regdate}</div>
            <div className="PostViewHeader_reply">
               <div className="PostViewHeader_reply_icon">
                  <IconContext.Provider value={{ size: '18' }}>
                     <GoComment />
                  </IconContext.Provider>
               </div>
               <div className="PostViewHeader_reply_value">
                  {replyNum} replys
               </div>
            </div>
         </div>
      </div>
   );
};

export default PostViewHeader;
