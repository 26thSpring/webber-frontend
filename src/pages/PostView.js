import React, { Component } from 'react';
import './PostView.scss';
import { PostViewHeader } from 'components/PostViewHeader';
import { PostViewBody } from 'components/PostViewBody';
import { PostViewFooter } from 'components/PostViewFooter';

class PostView extends Component {
   state = {
      data: {}
   };
   componentDidMount() {
      console.log(this.props.match.params);
      fetch(
         'http://localhost:9090/api/community/' +
            this.props.match.params.board_id
      ).then(res => {
         res.json().then(data => {
            console.log(data);
            this.setState({
               data
            });
         });
      });
   }
   render() {
      return (
         <div className="PostViewTemplate">
            <div className="PostViewSection">
               <PostViewHeader data={this.state.data} />
               <PostViewBody />
               <PostViewFooter />
            </div>
         </div>
      );
   }
}

export default PostView;
