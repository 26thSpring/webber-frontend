import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EditorView } from 'components/EditorView';
import { makeComponent, insertComponent } from 'store/modules/editor';

class EditorContainer extends Component {
   handleDropComponent = e => {
      e.preventDefault();
      let what = e.dataTransfer.getData('text');
      let component;
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
