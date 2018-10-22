import React, { Fragment } from 'react';
import './EditorView.scss';
import { CustomComponent } from 'components/CustomComponent';
import { EditorStyler } from 'components/EditorStyler';
import interact from 'interactjs';

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

const EditorView = ({
   onChangeCurrent,
   onChangeStyle,
   styles,
   currentComponent
}) => {
   const componentDrop = e => {
      console.log(e.target.offsetWidth);
      e.preventDefault();
      if (e.dataTransfer.getData('text/plain')) {
         const what = JSON.parse(e.dataTransfer.getData('text/plain'));
         let component;

         component = document.createElement(what.tag);

         const childWidth = e.target.getBoundingClientRect().width;
         const childHeight = e.target.getBoundingClientRect().height;

         component.style.width = childWidth / 2 + 'px';
         component.style.height = childHeight / 2 + 'px';
         if (what.tag !== 'input') {
            component.style.backgroundColor = randomColor();
         }
         component.innerHTML = `\<${what.tag} /\>`;
         e.target.appendChild(component);

         interact(component).draggable({
            // enable inertial throwing
            inertia: false,
            // keep the element within the area of it's parent
            restrict: {
               restriction: 'parent',
               endOnly: true,
               elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            // enable autoScroll
            autoScroll: true,

            // call this function on every dragmove event
            onmove: dragMoveListener
            // call this function on every dragend event
         });
      }
      //if (component) e.target.appendChild(document.getElementById(component));
   };
   function dragMoveListener(event) {
      var target = event.target,
         // keep the dragged position in the data-x/data-y attributes
         x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
         y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      // translate the element
      target.style.webkitTransform = target.style.transform =
         'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
   }
   window.dragMoveListener = dragMoveListener;
   return (
      <Fragment>
         <div
            onClick={onChangeCurrent}
            onDrop={componentDrop}
            onDragOver={allowDrop}
            className="EditorView"
         />
         <EditorStyler
            styles={styles}
            currentComponent={currentComponent}
            onChangeStyle={onChangeStyle}
         />
      </Fragment>
   );
};

export default EditorView;
