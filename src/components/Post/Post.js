import React, { Component } from 'react';
import './Post.scss';

const Post = () => {
   return (
      <div className="Post">
         <div className="Post_thumbnail">
            <img
               src="http://kstatic.inven.co.kr/upload/2018/02/16/bbs/i16682298371.jpg"
               alt="thumbnail"
            />
         </div>
         <div className="Post_contents">
            <div className="Post_nickName">NickName</div>
            <div className="Post_title">title</div>
         </div>
         <div clasName="Post_info">
            <div className="Post_reply">reply</div>
            <div className="Post_views">views</div>
            <div className="Post_regDate">regdate</div>
         </div>
      </div>
   );
};

export default Post;
