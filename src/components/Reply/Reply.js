import React, { Component } from 'react';
import './Reply.scss';
import { IconContext } from 'react-icons';
import { GoTrashcan } from 'react-icons/go/';
import { GoTools } from 'react-icons/go/';
import { read_cookie } from 'sfcookies';

const modifyReply = reply_id => {};
const nicknameFromSession = () => {
   if (localStorage.getItem('webber_user') !== null)
      return JSON.parse(localStorage.getItem('webber_user')).nickname;
};
class Reply extends Component {
   state = {
      Active: false,
      nickname: {}
   };
   constructor(props) {
      super(props);

      this.deleteReply = this.deleteReply.bind(this);
   }
   deleteReply = e => {
      fetch('http://localhost:9090/api/reply/' + this.props.data.reply_id, {
         credentials: 'same-origin',
         method: 'DELETE',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: read_cookie('access_token')
      }).then(res => {
         console.log('삭제');
         res.json().then(data => {
            console.log(data);
            window.location.reload();
         });
      });
   };
   render() {
      const {
         reply_id,
         //board_id,
         content,
         nickname,
         date,
         thumbnail
      } = this.props.data;

      console.log(nicknameFromSession());
      console.log(nickname);
      return (
         <div className="Reply">
            <div className="Reply_thumbnail">
               <img src={thumbnail} alt={nickname} />
            </div>
            <div className="Reply_body">
               <div className="Reply_head">
                  <div className="Reply_nickname">{nickname}</div>
                  <div className="Reply_regdate">{date}</div>
               </div>
               <div className="Reply_contents">{content}</div>
               {nicknameFromSession() === nickname && (
                  <div className="Reply_buttons">
                     <div className="Reply_modify">
                        <IconContext.Provider
                           className="Reply_modify_button"
                           value={{ size: '18' }}
                        >
                           <GoTools onClick={modifyReply(reply_id)} />
                        </IconContext.Provider>
                     </div>
                     <div className="Reply_trash" onClick={this.deleteReply}>
                        <IconContext.Provider
                           className="Reply_trash_button"
                           value={{ size: '18' }}
                        >
                           <GoTrashcan />
                        </IconContext.Provider>
                     </div>
                  </div>
               )}
            </div>
         </div>
      );
   }
}
export default Reply;
