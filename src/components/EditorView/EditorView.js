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
      console.log(e.target.getBoundingClientRect());
      const childWidth = e.target.getBoundingClientRect().width;
      const childHeight = e.target.getBoundingClientRect().height;
      console.log(childWidth, childHeight);
      component.style.width = childWidth / 2 + 'px';
      component.style.height = childHeight / 2 + 'px';
      component.style.backgroundColor = randomColor();
      e.target.appendChild(component);

      window.$();
   }
   //if (component) e.target.appendChild(document.getElementById(component));
};

const EditorView = ({ onChangeCurrent, styles }) => {
   return (
      <Fragment>
         <div
            onClick={onChangeCurrent}
            onDrop={componentDrop}
            onDragOver={allowDrop}
            className="EditorView"
         />
         <EditorStyler styles={styles} />
      </Fragment>
   );
};

export default EditorView;
