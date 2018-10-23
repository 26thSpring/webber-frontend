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
   currentComponent,
   handleTextWrite
}) => {
   const componentDrop = e => {
      console.log(e.target.offsetWidth);
      e.preventDefault();
      if (e.dataTransfer.getData('text/plain')) {
         const what = e.dataTransfer.getData('text/plain');
         let component;

         component = document.createElement(what);

         const childWidth = e.target.getBoundingClientRect().width;
         const childHeight = e.target.getBoundingClientRect().height;

         component.style.width = childWidth / 2 + 'px';
         component.style.height = childHeight / 2 + 'px';
         if (what !== 'input') {
            component.style.backgroundColor = randomColor();
         }
         component.innerHTML = `\<${what} /\>`;
         e.target.appendChild(component);

         interact(component)
            .draggable({
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
            })
            .resizable({
               // resize from all edges and corners
               edges: { left: true, right: true, bottom: true, top: true },

               // keep the edges inside the parent
               restrictEdges: {
                  outer: 'parent',
                  endOnly: true
               },

               // minimum size
               restrictSize: {
                  min: { width: 100, height: 50 }
               },

               inertia: true
            })
            .on('resizemove', function(event) {
               var target = event.target,
                  x = parseFloat(target.getAttribute('data-x')) || 0,
                  y = parseFloat(target.getAttribute('data-y')) || 0;

               // update the element's style
               target.style.width = event.rect.width + 'px';
               target.style.height = event.rect.height + 'px';

               // translate when resizing from top or left edges
               x += event.deltaRect.left;
               y += event.deltaRect.top;

               target.style.webkitTransform = target.style.transform =
                  'translate(' + x + 'px,' + y + 'px)';

               target.setAttribute('data-x', x);
               target.setAttribute('data-y', y);
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
            handleTextWrite={handleTextWrite}
         />
      </Fragment>
   );
};

export default EditorView;
