import React, { Component } from 'react';
import './PostViewFooter.scss';
import { Reply } from 'components/Reply';

class PostViewFooter extends Component {
   constructor() {
      super();
      this.state = {
         data: []
      };
   }
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
               });
            })
            .catch(err => {
               console.log(err);
            });
      }
   }
   componentDidUpdate() {
      console.log(this.state.data);
   }
   render() {
      return (
         <div className="PostViewFooter">
            <div className="replyForm">
               <textarea
                  name="replyForm"
                  id="replyForm"
                  placeholder="Add Your Comment! (140)"
               />
            </div>
            <div className="replyPost">
               <div className="replyPost_button">POST</div>
            </div>
            <div className="replyList">
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
