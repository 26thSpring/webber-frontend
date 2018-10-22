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
      const { EditorActions } = this.props;
      EditorActions.changeCurrent(e.target);

      const {
         position,
         display,
         width,
         height,
         backgroundColor,
         color,
         border,
         margin,
         padding
      } = e.target.style;

      const currentStyle = {
         position,
         display,
         width,
         height,
         backgroundColor,
         color,
         border,
         margin,
         padding
      };

      EditorActions.mergeStyle(currentStyle);

      const inner = document.getElementsByClassName('EditorView')[0].innerHTML;
      EditorActions.setInner(inner);
   };

   handleChangeStyle = e => {
      console.log('리듀서-------------------');
      const { EditorActions } = this.props;

      const current = this.props.currentComponent;
      console.log(current);
      //EditorActions.changeCurrent('');

      console.log(this.props.currentComponent.style);
      const attr = e.target.classList[0];
      const value = e.target.value;
      const newAttr = { attr, value };

      current.style[attr] = value;

      //const currentClone = cloneDeep(current);
      //const currentClone = window.$(current).clone()[0];
      //currentClone.style[attr] = value;
      //console.log(currentClone.style);
      //currentClone.style = Object.assign(currentClone.style, newAttr);
      //const newStyle = Object.assign(currentStyle, newAttr);
      //const newStyle = cloneDeep(this.props.styles);

      console.log(newAttr);
      //console.log(newStyle);
      //this.props.currentComponent.style = newStyle;

      EditorActions.changeStyle(newAttr);

      const inner = document.getElementsByClassName('EditorView')[0].innerHTML;
      EditorActions.setInner(inner);
      console.log('리듀서-------------------');
   };

   render() {
      const { handleChangeCurrent, handleChangeStyle } = this;
      const { currentComponent, styles, innerHTML } = this.props;
      return (
         <Fragment>
            <EditorNav />
            <EditorView
               sheet={this.sheet}
               styles={styles}
               currentComponent={currentComponent}
               onChangeCurrent={handleChangeCurrent}
               onChangeStyle={handleChangeStyle}
            />
         </Fragment>
      );
   }
}

export default connect(
   ({ editor }) => ({
      // immutable 을 사용하니, 값을 조회 할 때는 .get 을 사용
      innerHTML: editor.get('innerHTML'),
      styles: editor.get('styles'),
      currentComponent: editor.get('currentComponent')
   }),
   dispatch => ({
      EditorActions: bindActionCreators(editorActions, dispatch)
   })
)(EditorContainer);
