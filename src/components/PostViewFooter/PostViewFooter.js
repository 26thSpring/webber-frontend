import React, { Component } from 'react';
import './PostViewFooter.scss';
import { Reply } from 'components/Reply';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

class PostViewFooter extends Component {
   state = {
      dataCheck: false,
      data: []
   };
   componentDidMount() {
      if (this.props.data.board_Id) {
         fetch(
            'http://localhost:9090/api/community/' + this.props.data.board_Id
         )
            .then(res => {
               res.json().then(data => {
                  this.setState({
                     data: data.replies
                  });
                  //console.log(data);
                  console.log(this.state.data);
               });
            })
            .catch(err => {
               console.log(err);
            });
      }
   }
   render() {
      //console.log(this.state);
      //const replyData = this.props.data.replies;
      //console.log(replyData);
      return (
         <div className="PostViewFooter">
            <form method="POST" action="http://localhost:9090/api/reply">
               <div className="replyForm">
                  <input
                     className="PostViewFooter_replyData"
                     value={this.props.data.board_Id}
                     name="board_id"
                  />
                  <input
                     className="PostViewFooter_replyData"
                     value={read_cookie('access_token')}
                     name="access_token"
                  />
                  <textarea name="contents" placeholder="Add Your Comments!" />
               </div>
               <div className="replyPost">
                  <button className="replyPost_button" type="submit">
                     POST
                  </button>
               </div>
            </form>
            <div className="replyList" id="replyBox">
               {this.state.data.map((reply, i) => {
                  return (
                     <Reply
                        reply_Id={reply.reply_Id}
                        board_Id={reply.board_Id}
                        content={reply.content}
                        nickname={reply.nickname}
                        date={reply.date}
                        thumbnail={reply.thumbnail}
                        key={i}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
export default PostViewFooter;
