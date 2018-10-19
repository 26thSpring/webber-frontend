import React, { Component, Fragment } from 'react';
import { TemplatePost } from 'components/TemplatePost';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as templateListActions from 'store/modules/templateList';

class TemplateListContainer extends Component {
   handleDataFetch = e => {
      const { TemplateListActions } = this.props;
      fetch('http://localhost:9090/api/template')
         .then(res => {
            if (res.status === 200) {
               res.json().then(data => {
                  console.log(data);
                  TemplateListActions.mergeData(data);
               });
            }
         })
         .catch(err => console.log(err));
   };

   // 리덕스 state 초기화
   handleInitState = e => {
      const { TemplateListActions } = this.props;
      TemplateListActions.init();
   };

   componentDidMount() {
      this.handleDataFetch();
   }

   render() {
      const { handleDataFetch, handleInitState } = this;
      const { templateList } = this.props;
      return (
         <div className="TemplateList">
            {templateList.map((template, index) => {
               return <TemplatePost data={template} />;
            })}
         </div>
      );
   }
}

export default connect(
   ({ templateList }) => ({
      // immutable 을 사용하니, 값을 조회 할 때는 .get 을 사용
      templateList: templateList.get('templateList')
   }),
   dispatch => ({
      TemplateListActions: bindActionCreators(templateListActions, dispatch)
   })
)(TemplateListContainer);
