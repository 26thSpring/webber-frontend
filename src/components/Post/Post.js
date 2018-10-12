import React from 'react';
import './Post.scss';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GoComment, GoClock } from 'react-icons/go';

const Post = () => {
   return (
      <Link to="/PostView">
         <div className="Post">
            <div className="Post_thumbnail">
               <img
                  src="https://png.pngtree.com/element_origin_min_pic/17/03/18/c725e020d58d9c6ae6da4270357e4e9a.jpg"
                  alt="Post_thumbnail"
               />
            </div>
            <div className="Post_contents">
               <div className="Post_nickname">NickName</div>
               <div className="Post_title">Post.js</div>
            </div>
            <div className="Post_info">
               <div className="Post_reply">
                  <div className="Post_reply_icon">
                     <IconContext.Provider value={{ size: '18' }}>
                        <GoComment />
                     </IconContext.Provider>
                  </div>
                  <div className="Post_reply_value">10 replys</div>
               </div>
               <div className="Post_regDate">
                  <div className="Post_regDate_icon">
                     <IconContext.Provider value={{ size: '18' }}>
                        <GoClock />
                     </IconContext.Provider>
                  </div>
                  <div className="Post_regDate_value">10 mins</div>
               </div>
               <div className="Post_views">10 views</div>
            </div>
         </div>
      </Link>
   );
};

export default Post;
