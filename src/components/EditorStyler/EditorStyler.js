import React from 'react';
import './EditorStyler.scss';
import interact from 'interactjs';

const EditorStyler = ({ styles }) => {
   interact('.EditorStyler').draggable({
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
   if (!styles) {
      null;
   } else {
      console.log('아아' + styles.width);
      return (
         <div className="EditorStyler" onChange={e => console.log(e.target)}>
            <div className="EditorStyler_header">
               <div>스타일 편집기</div>
               <span className="dragZone" />
            </div>
            <div className="EditorStyler_body">
               <div className="position">{styles.position}</div>
               <div className="display">{styles.display}</div>
               <div className="size">
                  <input
                     type="text"
                     className="width"
                     value={styles.width || ''}
                  />
                  <div className="height">{styles.height}</div>
               </div>
               <div className="backgroundColor">{styles.backgroundColor}</div>
               <div className="color">{styles.color}</div>
               <div className="border">{styles.border}</div>
               <div className="margin">{styles.margin}</div>
               <div className="padding">{styles.padding}</div>
            </div>
         </div>
      );
   }
};

export default EditorStyler;
