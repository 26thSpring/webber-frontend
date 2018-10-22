import React from 'react';
import './EditorStyler.scss';
import interact from 'interactjs';
import { FaArrowsAltH, FaArrowsAltV } from 'react-icons/fa';
import { MdPalette, MdFeaturedVideo, MdAirplay } from 'react-icons/md';
import { IconContext } from 'react-icons';

const EditorStyler = ({ onChangeStyle, styles, currentComponent }) => {
   interact('.EditorStyler_header').draggable({
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
      var target = event.target.parentNode,
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
   if (!styles || !currentComponent) {
      return '';
   } else {
      console.log('스타일러---------------');
      console.log(styles);
      console.log(styles.width);
      console.log('스타일러---------------');
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
      } = styles.toJS();
      const selectRadio = e => {
         const label = document.getElementsByTagName('label');

         if (window.$(e.target).hasClass('position')) {
            for (let i = 0; i < label.length; i++) {
               if (label[i].htmlFor === e.target.id) {
                  console.log('안아런ㅇㄹ');
                  window
                     .$('.EditorStyler_body_position label')
                     .removeClass('selected');
                  label[i].classList.add('selected');
               }
            }
         } else if (window.$(e.target).hasClass('display')) {
            for (let i = 0; i < label.length; i++) {
               if (label[i].htmlFor === e.target.id) {
                  window
                     .$('.EditorStyler_body_display label')
                     .removeClass('selected');
                  label[i].classList.add('selected');
               }
            }
         }
      };
      return (
         <div className="EditorStyler" onChange={onChangeStyle.bind(this)}>
            <div className="EditorStyler_header">
               <div>스타일 편집기</div>
               <span className="dragZone" />
            </div>
            <div className="EditorStyler_body">
               <div className="EditorStyler_body_position frc">
                  <div className="EditorStyler_body_icons">
                     <IconContext.Provider value={{ size: '24' }}>
                        <MdFeaturedVideo />
                     </IconContext.Provider>
                  </div>
                  <div>
                     <label htmlFor="select_position_relative">상대</label>
                     <label htmlFor="select_position_absolute">절대</label>
                     <label htmlFor="select_position_fixed">고정</label>
                  </div>
                  <input
                     type="radio"
                     value="relative"
                     id="select_position_relative"
                     name="radio_position"
                     className="position"
                     onClick={selectRadio}
                  />
                  <input
                     type="radio"
                     value="absolute"
                     id="select_position_absolute"
                     name="radio_position"
                     className="position"
                     onClick={selectRadio}
                  />
                  <input
                     type="radio"
                     value="fixed"
                     id="select_position_fixed"
                     name="radio_position"
                     className="position"
                     onClick={selectRadio}
                  />

                  {/* <select name="" id="select_position">
                     <option value="relative" id="select_position_relative" />
                     <option value="absolute" id="select_position_absolute" />
                     <option value="fixed" id="select_position_fixed" />
                    </select> */}
               </div>
               <div className="EditorStyler_body_display frc">
                  <div className="EditorStyler_body_icons">
                     <IconContext.Provider value={{ size: '24' }}>
                        <MdAirplay />
                     </IconContext.Provider>
                  </div>
                  <div>
                     <label htmlFor="select_display_relative">플렉스</label>
                     <label htmlFor="select_display_absolute">블록</label>
                     <label htmlFor="select_display_fixed">인라인</label>
                  </div>
                  <input
                     type="radio"
                     value="flex"
                     id="select_display_relative"
                     name="radio_display"
                     className="display"
                     onClick={selectRadio}
                  />
                  <input
                     type="radio"
                     value="block"
                     id="select_display_absolute"
                     name="radio_display"
                     className="display"
                     onClick={selectRadio}
                  />
                  <input
                     type="radio"
                     value="inline"
                     id="select_display_fixed"
                     name="radio_display"
                     className="display"
                     onClick={selectRadio}
                  />
               </div>
               <div className="EditorStyler_body_width frc">
                  <div className="EditorStyler_body_icons">
                     <IconContext.Provider value={{ size: '24' }}>
                        <FaArrowsAltH />
                     </IconContext.Provider>
                  </div>
                  <input type="text" className="width" value={width} />
               </div>
               <div className="EditorStyler_body_height frc">
                  <div className="EditorStyler_body_icons">
                     <IconContext.Provider value={{ size: '24' }}>
                        <FaArrowsAltV />
                     </IconContext.Provider>
                  </div>
                  <input type="text" className="height" value={height} />
               </div>
               <div className="EditorStyler_body_backgroundColor frc">
                  <div className="EditorStyler_body_icons">
                     <IconContext.Provider value={{ size: '24' }}>
                        <MdPalette />
                     </IconContext.Provider>
                  </div>
                  <input
                     type="text"
                     className="backgroundColor"
                     value={backgroundColor}
                  />
               </div>
               <div className="EditorStyler_body_color frc">{color}</div>
               <div className="EditorStyler_body_border frc">{border}</div>
               <div className="EditorStyler_body_margin frc">{margin}</div>
               <div className="EditorStyler_body_padding frc">{padding}</div>
            </div>
         </div>
      );
   }
};

export default EditorStyler;
