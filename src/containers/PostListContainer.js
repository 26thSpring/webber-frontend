import React, { Component, Fragment } from 'react';
import { Post } from 'components/Post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postListActions from 'store/modules/postList';

class PostListContainer extends Component {
   handleDataFetch = e => {
      const { PostListActions } = this.props;
      fetch('http://localhost:9090/api/community')
         .then(res => {
            if (res.status === 200) {
               res.json().then(data => {
                  console.log(data);
                  PostListActions.mergeData(data);
               });
            }
         })
         .catch(err => console.log(err));
   };

   // 리덕스 state 초기화
   handleInitState = e => {
      const { PostListActions } = this.props;
      PostListActions.init();
   };

   componentDidMount() {
      this.handleDataFetch();
   }

   render() {
      const { handleDataFetch, handleInitState } = this;
      const { postList } = this.props;
      return (
         <div className="CommunityBody_postList">
            {postList.map((post, index) => {
               return <Post data={post} />;
            })}
         </div>
      );
   }
}

export default connect(
   ({ postList }) => ({
      // immutable 을 사용하니, 값을 조회 할 때는 .get 을 사용
      postList: postList.get('postList')
   }),
   dispatch => ({
      PostListActions: bindActionCreators(postListActions, dispatch)
   })
)(PostListContainer);
