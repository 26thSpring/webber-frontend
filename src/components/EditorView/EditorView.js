import React from 'react';
import './EditorView.scss';

const defaultStyle = {
   width: '50%',
   height: '50%',
   backgroundColor: 'red'
};

const allowDrop = e => {
   e.preventDefault();
};

const componentDrop = e => {
   console.log(e.target.offsetWidth);
   e.preventDefault();
   let what = e.dataTransfer.getData('text');
   let component;
   if (what == 'div') {
      component = document.createElement('div');
      component.style.width = defaultStyle.width;
      component.style.height = defaultStyle.height;
      component.style.backgroundColor = defaultStyle.backgroundColor;
      e.target.appendChild(component);
   }
   //if (component) e.target.appendChild(document.getElementById(component));
};

const EditorView = () => {
   return (
      <div
         onDrop={componentDrop}
         onDragOver={allowDrop}
         className="EditorView"
      />
   );
};

export default EditorView;
