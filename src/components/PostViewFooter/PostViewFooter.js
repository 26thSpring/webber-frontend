import React, { Component } from 'react';
import './PostViewFooter.scss';
import { Reply } from 'components/Reply';
import { read_cookie } from 'sfcookies';
import { IconContext } from 'react-icons';
import { GoComment } from 'react-icons/go/';

class PostViewFooter extends Component {
   state = {
      data: [],
      isData: false
   };

   constructor(props) {
      super(props);
      this.setState({
         isData: false
      });

      this.replyPost = this.replyPost.bind(this);
   }
   replyPost(e) {
      e.preventDefault();
      const form = document.getElementById('replySubmit');
      const formData = new FormData(form);
      formData.append('access_token', read_cookie('access_token'));
      console.log(form);
      console.log(formData.get('board_id'));
      fetch('http://localhost:9090/api/reply', {
         method: 'post',
         body: formData
      }).then(res => {
         res.json().then(data => {
            if (data.result === 'success') {
               this.callAPI();
            }
         });
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
                     <div className="PostViewHeader_reply">
                        <div className="PostViewHeader_reply_icon">
                           <IconContext.Provider value={{ size: '18' }}>
                              <GoComment />
                           </IconContext.Provider>
                        </div>
                        <div className="PostViewHeader_reply_value">
                           {this.state.data.length} 개의 댓글
                        </div>
                     </div>

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
