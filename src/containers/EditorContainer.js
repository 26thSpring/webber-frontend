import React, { Component, Fragment } from 'react';
import { EditorNav } from 'components/EditorNav';
import { EditorView } from 'components/EditorView';
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

   handleChangeCurrent = e => {
      let target = window.$(e.target);
      console.log(e.target);
      console.log(e.target.style);
      console.log(e.target.style.width);
      console.log(e.target.style.height);
      console.log(e.target.style.backgroundColor);

      const { EditorActions } = this.props;
      EditorActions.changeCurrent(e.target.style);
   };

   handleChangeStyle = e => {
      const { EditorActions } = this.props;
      EditorActions.changeStyles(e.target.value);
   };

   render() {
      const { handleChangeCurrent } = this;
      const { styles } = this.props;
      return (
         <Fragment>
            <EditorNav />
            <EditorView styles={styles} onChangeCurrent={handleChangeCurrent} />
         </Fragment>
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
