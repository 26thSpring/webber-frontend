import React from 'react';
import './Post.scss';
import reply_img from 'static/images/reply_img.svg';
import clock_img from 'static/images/clock_img.svg';
import { Link } from 'react-router-dom';

const Post = () => {
   return (
      <Link to="/PostView">
         <div className="Post">
            <div className="Post_thumbnail">
               <img
                  src="https://png.pngtree.com/element_origin_min_pic/17/03/18/c725e020d58d9c6ae6da4270357e4e9a.jpg"
                  alt="thumbnail"
               />
            </div>
            <div className="Post_contents">
               <div className="Post_nickName">NickName</div>
               <div className="Post_title">this is for title !!!</div>
            </div>
            <div className="Post_info">
               <div className="Post_reply">
                  <img className="" src={reply_img} alt="reply_img" />
                  10
               </div>
               <div className="Post_regDate">
                  <img src={clock_img} alt="clock_img" />
                  10
               </div>
               <div className="Post_views">10 views</div>
            </div>
         </div>
      </Link>
   );
};

export default Post;
