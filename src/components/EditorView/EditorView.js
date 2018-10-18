import React, { Fragment } from 'react';
import './EditorView.scss';
import { CustomComponent } from 'components/CustomComponent';
import { EditorStyler } from 'components/EditorStyler';

const handleDragOver = e => {
   console.log(e.currentTarget);
};

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
   if (e.dataTransfer.getData('text/plain')) {
      const what = JSON.parse(e.dataTransfer.getData('text/plain'));
      let component;
      console.log(what.tag);

      component = document.createElement(what.tag);
      component.style.width = defaultStyle.width;
      component.style.height = defaultStyle.height;
      component.style.backgroundColor = randomColor();
      e.target.appendChild(component);
   }
   //if (component) e.target.appendChild(document.getElementById(component));
};

const EditorView = () => {
   return (
      <Fragment>
         <div
            onDrop={componentDrop}
            onDragOver={allowDrop}
            className="EditorView"
         />
         <EditorStyler />
      </Fragment>
   );
};

export default EditorView;
