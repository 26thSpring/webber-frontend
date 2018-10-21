import React, { Component } from 'react';
import './PostViewFooter.scss';
import { Reply } from 'components/Reply';
import { read_cookie } from 'sfcookies';

class PostViewFooter extends Component {
   state = {
      data: [],
      isData: false
   };

   constructor() {
      super();
      this.setState({
         isData: false
      });
   }
   replyPost(e) {
      e.preventDefault();
      const form = document.getElementById('replySubmit');
      const formData = new FormData(form);
      console.log(formData);
      fetch('http://localhost:9090/api/reply', {
         method: 'post'
      });
   }
   callAPI() {
      fetch('http://localhost:9090/api/community/' + this.props.data)
         .then(res => {
            res.json().then(data => {
               console.log('fetch');
               console.log(data);
               this.setState({
                  data: data.replies,
                  isData: true
               });
            });
         })
         .catch(err => {
            console.log(err);
         });
   }
   componentDidMount() {
      console.log(this.props);
      console.log(this.props.data);
      this.callAPI();
   }
   render() {
      if (!this.state.isData) {
         return '로딩중...';
      } else {
         return (
            <div className="PostViewFooter">
               <form
                  id="replySubmit"
                  onSubmit={this.replyPost}
                  method="POST"
                  action="http://localhost:9090/api/reply"
               >
                  <div className="replyForm">
                     <input
                        type="hidden"
                        className="PostViewFooter_replyData"
                        defaultValue={this.props.data}
                        name="board_id"
                     />
                     <input
                        type="hidden"
                        className="PostViewFooter_replyData"
                        defaultValue={read_cookie('access_token')}
                        name="access_token"
                     />
                     <textarea
                        name="contents"
                        placeholder="Add Your Comments!"
                     />
                  </div>
                  <div className="replyPost">
                     <button className="replyPost_button" type="submit">
                        POST
                     </button>
                  </div>
               </form>

               <div className="replyList" id="replyBox">
                  {this.state.data.map((reply, i) => {
                     return <Reply data={reply} key={i} />;
                  })}
               </div>
            </div>
         );
      }
   }
}
export default PostViewFooter;
