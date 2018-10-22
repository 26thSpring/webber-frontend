import React from 'react';
import './Post.scss';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GoComment, GoClock } from 'react-icons/go';
import { read_cookie } from 'sfcookies';

const nicknameFromSession = () => {
   if (localStorage.getItem('webber_user') !== null)
      return JSON.parse(localStorage.getItem('webber_user')).nickname;
};
const authFromSession = () => {
   if (localStorage.getItem('webber_user') !== null)
      return JSON.parse(localStorage.getItem('webber_user')).auth;
};

const Post = ({ data }) => {
   const {
      thumbnail,
      nickname,
      title,
      regdate,
      views,
      replyNum,
      board_Id
   } = data;
   const PostDelete = board_Id => {
      alert(board_Id);
      fetch('http://localhost:9090/api/community/' + board_Id, {
         credentials: 'same-origin',
         method: 'DELETE',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: read_cookie('access_token')
      }).then(window.location.replace('/community'));
   };

   return (
      <Link to={`/postview/${board_Id}`}>
         <div className="Post">
            <div className="Post_thumbnail">
               <img src={thumbnail} alt="Post_thumbnail" />
            </div>
            <div className="Post_contents">
               <div className="Post_nickname">{nickname}</div>
               <div className="Post_title">{title}</div>
            </div>
            <div className="Post_info">
               <div className="Post_reply">
                  <div className="Post_reply_icon">
                     <IconContext.Provider value={{ size: '18' }}>
                        <GoComment />
                     </IconContext.Provider>
                  </div>
                  <div className="Post_reply_value">{replyNum} replys</div>
               </div>
               <div className="Post_regDate">
                  <div className="Post_regDate_icon">
                     <IconContext.Provider value={{ size: '18' }}>
                        <GoClock />
                     </IconContext.Provider>
                  </div>
                  <div className="Post_regDate_value">{regdate}</div>
               </div>
               <div className="Post_views">{views} views</div>
            </div>
            {nicknameFromSession() === nickname ? (
               <div
                  className="Post_deleteButton"
                  onClick={e => PostDelete(board_Id)}
               >
                  x
               </div>
            ) : (
               <div />
            )}
         </div>
      </Link>
   );
};

export default Post;
