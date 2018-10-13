import React from 'react';
import './EditorView.scss';
import { CustomComponent } from 'components/CustomComponent';

const defaultStyle = {
   width: '50%',
   height: '50%',
   backgroundColor: 'red'
};

const randomColor = () =>
   `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() *
      256})`;

const allowDrop = e => {
   e.preventDefault();
};

const componentDrop = e => {
   console.log(e.target.offsetWidth);
   e.preventDefault();
   let what = e.dataTransfer.getData('text');
   let component;
   if (what === 'div') {
      component = document.createElement('div');
      component.style.width = defaultStyle.width;
      component.style.height = defaultStyle.height;
      component.style.backgroundColor = randomColor();
      e.target.appendChild(component);
   }
   //if (component) e.target.appendChild(document.getElementById(component));
};

const EditorView = () => {
   return (
      <div onDrop={componentDrop} onDragOver={allowDrop} className="EditorView">
         <CustomComponent what={'span'} />
      </div>
   );
};

export default EditorView;
