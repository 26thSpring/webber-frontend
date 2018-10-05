import React from 'react';
import './PostViewHeader.scss';
import reply_img from 'static/images/reply_img.svg';

const PostViewHeader = () => {
   return (
      <div className="PostViewHeader">
         <div className="PostViewHeader_Head">
            <div className="PostViewHeader_thumbnail">
               <img
                  src="https://png.pngtree.com/element_origin_min_pic/17/03/18/c725e020d58d9c6ae6da4270357e4e9a.jpg"
                  alt="thumbnail"
               />
            </div>
            <div className="PostViewHeader_nickName">NickName</div>
         </div>

         <div className="PostViewHeader_title">this is for title !!!</div>

         <div className="PostViewHeader_info">
            <div className="PostViewHeader_regDate">2018-10-05</div>
            <div className="PostViewHeader_reply">
               <img src={reply_img} alt="reply_img" />
               10 replys
            </div>
         </div>
      </div>
   );
};

export default PostViewHeader;
