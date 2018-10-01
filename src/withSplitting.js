import React, { Component } from 'react';

const withSplitting = getComponent => {
   // 여기서 getComponent 는 () => import('./SplitMe') 의 형태로 함수가 전달되어야합니다.
   class WithSplitting extends Component {
      state = {
         Splitted: null
      };
      constructor(props) {
         super(props);
      }
   }
};
