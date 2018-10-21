import React, { Component } from 'react';
import './PostView.scss';
import { PostViewHeader } from 'components/PostViewHeader';
import { PostViewBody } from 'components/PostViewBody';
import { PostViewFooter } from 'components/PostViewFooter';

class PostView extends Component {
   state = {
      data: {},
      isData: false
   };
   constructor() {
      super();
      this.setState({
         isData: false
      });
   }

   componentDidMount() {
      fetch(
         'http://localhost:9090/api/community/' +
            this.props.match.params.board_id
      )
         .then(res => {
            res.json().then(data => {
               this.setState({
                  data,
                  isData: true
               });
               console.log();
            });
         })
         .catch(err => {
            console.log(err);
         });
   }
   render() {
      const { board_id } = this.props.match.params;
      if (!this.state.isData) return '로딩중...';
      else {
         console.log(this.state.data);
         return (
            <div className="PostViewTemplate">
               <div className="PostViewSection">
                  <PostViewHeader data={this.state.data} />
                  <PostViewBody data={this.state.data} />
                  <PostViewFooter data={board_id} />
               </div>
            </div>
         );
      }
   }
}

export default PostView;
