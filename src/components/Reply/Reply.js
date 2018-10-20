import React, { Component } from 'react';
import './Reply.scss';
import { IconContext } from 'react-icons';
import { GoTrashcan } from 'react-icons/go/';
import { GoTools } from 'react-icons/go/';

const deleteReply = reply_Id => {
   fetch('http://localhost:9090/api/reply' + reply_Id);
};

const modifyReply = reply_Id => {
   fetch('http://localhost:9090/api/reply' + reply_Id);
};

class Reply extends Component {
   // console.log('reply : ' + JSON.stringify(data[0]));
   //console.log(JSON.stringify(data));
   //   const { reply_Id, board_Id, content, nickname, date, thumbnail } = data[0];
   render() {
      const {
         reply_Id,
         board_Id,
         content,
         nickname,
         date,
         thumbnail
      } = this.props;
      //console.log(this.props.content)
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
               <div className="Reply_buttons">
                  <div
                     className="Reply_modify"
                     onClick={modifyReply({ reply_Id })}
                  >
                     <IconContext.Provider
                        className="Reply_modify_button"
                        value={{ size: '18' }}
                     >
                        <GoTools />
                     </IconContext.Provider>
                  </div>
                  <div
                     className="Reply_trash"
                     onClick={deleteReply({ reply_Id })}
                  >
                     <IconContext.Provider
                        className="Reply_trash_button"
                        value={{ size: '18' }}
                     >
                        <GoTrashcan />
                     </IconContext.Provider>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
export default Reply;
