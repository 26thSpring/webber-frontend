import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as editorActions from 'store/modules/editor';

class EditorContainer extends Component {
   handleDropComponent = e => {
      e.preventDefault();
      let what = e.dataTransfer.getData('text');
      let component;

      const { EditorActions } = this.props;
      EditorActions.changeCurrent(e.target);

      if (what.type === 'boxModel') {
      }
   };
   render() {
      return (
         <div>
            <div>null</div>
         </div>
      );
   }
}

export default connect(
   ({ editor }) => ({
      // immutable 을 사용하니, 값을 조회 할 때는 .get 을 사용
      styles: editor.get('styles')
   }),
   dispatch => ({
      EditorActions: bindActionCreators(editorActions, dispatch)
   })
)(EditorContainer);
