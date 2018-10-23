import React from 'react';
import './EditorStyler.scss';
import interact from 'interactjs';
import { FaArrowsAltH, FaArrowsAltV } from 'react-icons/fa';
import {
   MdPalette,
   MdFeaturedVideo,
   MdAirplay,
   MdTextFields
} from 'react-icons/md';
import { IconContext } from 'react-icons';

const EditorStyler = ({
   onChangeStyle,
   styles,
   currentComponent,
   handleTextWrite
}) => {
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
   if (!styles && !currentComponent) {
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
         padding,
         flexDirection,
         justifyContent,
         alignItems,
         flexWrap,
         innerHTML
      } = styles.toJS();

      console.log('제발여');
      console.log(styles.toJS());
      if (position !== '') {
         console.log(position);
         window
            .$('.EditorStyler')
            .find(`#select_position_${position}`)
            .prop('checked', true);
         window.$('.EditorStyler_body_position label').removeClass('selected');
         const label = window.$('.EditorStyler_body_position label');
         for (let i = 0; i < label.length; i++) {
            if (label.eq(i).prop('htmlFor') === `select_position_${position}`) {
               window
                  .$('.EditorStyler_body_position label')
                  .removeClass('selected');
               label.eq(i).addClass('selected');
            }
         }
      } else {
         window
            .$('.EditorStyler_body_position input[type="radio"]')
            .prop('checked', false);
         window.$('.EditorStyler_body_position label').removeClass('selected');
      }

      if (display !== '') {
         console.log(display);
         window
            .$('.EditorStyler')
            .find(`#select_display_${display}`)
            .prop('checked', true);
         window.$('.EditorStyler_body_display label').removeClass('selected');
         const label = window.$('.EditorStyler_body_display label');
         console.log(label);
         for (let i = 0; i < label.length; i++) {
            if (label.eq(i).prop('htmlFor') === `select_display_${display}`) {
               window
                  .$('.EditorStyler_body_display label')
                  .removeClass('selected');
               label.eq(i).addClass('selected');
            }
         }
      } else {
         window
            .$('.EditorStyler_body_display input[type="radio"]')
            .prop('checked', false);
         window.$('.EditorStyler_body_display label').removeClass('selected');
      }

      //   flexDirection
      //   justifyContent
      //     alignItems
      //     flexWrap
      if (justifyContent !== '') {
         window
            .$('.EditorStyler')
            .find('#select_flex_justifyContent')
            .prop('checked', true);
      } else {
         window
            .$('.EditorStyler')
            .find('#select_flex_alignItems')
            .prop('checked', false);
      }
      if (alignItems !== '') {
         window
            .$('.EditorStyler')
            .find('#select_flex_alignItems')
            .prop('checked', true);
      } else {
         window
            .$('.EditorStyler')
            .find('#select_flex_flexWrap')
            .prop('checked', false);
      }
      if (flexWrap !== '') {
         window
            .$('.EditorStyler')
            .find('#select_flex_flexWrap')
            .prop('checked', true);
      } else {
         window
            .$('.EditorStyler')
            .find('#select_flex_justifyContent')
            .prop('checked', false);
      }

      if (flexDirection !== '') {
         window
            .$('.EditorStyler')
            .find(`#select_flexDirection_${flexDirection}`)
            .prop('checked', true);
         window.$('.EditorStyler_body_flex label').removeClass('selected');
         const label = window.$('.EditorStyler_body_flex label');
         console.log(label);
         for (let i = 0; i < label.length; i++) {
            if (
               label.eq(i).prop('htmlFor') ===
               `select_flexDirection_${flexDirection}`
            ) {
               window
                  .$('.EditorStyler_body_flex label')
                  .removeClass('selected');
               label.eq(i).addClass('selected');
            }
         }
      } else {
         window
            .$('.EditorStyler_body_flex input[type="radio"]')
            .prop('checked', false);
         window.$('.EditorStyler_body_flex label').removeClass('selected');
      }

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
      const selectCheck = e => {
         const label = window.$('.EditorStyler_body_flex label');
         for (let i = 0; i < label.length; i++) {
            if (label.eq(i).prop('htmlFor') === e.target.id) {
               label.eq(i).toggleClass('selected');
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
                     <label htmlFor="select_display_flex">플렉스</label>
                     <label htmlFor="select_display_block">블록</label>
                     <label htmlFor="select_display_inline">인라인</label>
                  </div>
                  <input
                     type="radio"
                     value="flex"
                     id="select_display_flex"
                     name="radio_display"
                     className="display"
                     onClick={selectRadio}
                  />
                  <input
                     type="radio"
                     value="block"
                     id="select_display_block"
                     name="radio_display"
                     className="display"
                     onClick={selectRadio}
                  />
                  <input
                     type="radio"
                     value="inline"
                     id="select_display_inline"
                     name="radio_display"
                     className="display"
                     onClick={selectRadio}
                  />
               </div>
               {window.$('#select_display_flex').prop('checked') && (
                  <div className="EditorStyler_body_flex frc">
                     <div style={{ fontWeight: '400' }}>flex 속성</div>
                     <div className="EditorStyler_body_flex_label">
                        <label htmlFor="select_flexDirection_row">
                           가로정렬
                        </label>
                        <label htmlFor="select_flexDirection_column">
                           세로정렬
                        </label>
                        <label htmlFor="select_flex_justifyContent">주축</label>
                        <label htmlFor="select_flex_alignItems">보조축</label>
                        <label htmlFor="select_flex_wrap">랩핑</label>
                     </div>
                     <input
                        type="radio"
                        value="row"
                        id="select_flexDirection_row"
                        name="radio_flexDirection"
                        className="flexDirection"
                        onClick={selectRadio}
                     />
                     <input
                        type="radio"
                        value="column"
                        id="select_flexDirection_column"
                        name="radio_flexDirection"
                        className="flexDirection"
                        onClick={e => {
                           e.target.classList.toggle('selected');
                        }}
                     />
                     <input
                        type="checkbox"
                        value="center"
                        id="select_flex_justifyContent"
                        name="check_flex"
                        className="justifyContent"
                        onClick={selectCheck}
                     />
                     <input
                        type="checkbox"
                        value="center"
                        id="select_flex_alignItems"
                        name="check_flex"
                        className="alignItems"
                        onClick={selectCheck}
                     />
                     <input
                        type="checkbox"
                        value="wrap"
                        id="select_flex_wrap"
                        name="check_flex"
                        className="flexWrap"
                        onClick={selectCheck}
                     />
                  </div>
               )}
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
               <div className="EditorStyler_body_innerHTML frc">
                  <div className="EditorStyler_body_icons">
                     <IconContext.Provider value={{ size: '24' }}>
                        <MdTextFields />
                     </IconContext.Provider>
                  </div>
                  <input
                     type="text"
                     onChange={handleTextWrite}
                     className="innerHTML"
                     value={innerHTML}
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
