import React from 'react';
import './BInputModel.scss';

const componentDrag = e => {
   e.dataTransfer.setData(
      'text/plain',
      JSON.stringify({ type: 'BInputModel', tag: e.target.id })
   );
};

const BInputModel = () => {
   const toggleDropdown = e => {
      const menu = window.document.getElementsByClassName(
         'BInputModel_dropdown_menu'
      )[0];
      menu.classList.toggle('active');
   };
   return (
      <div className="BInputModel">
         <div className="BInputModel_btn_dropdown" onClick={toggleDropdown}>
            입력 모델
         </div>
         <div className="BInputModel_dropdown_menu">
            <input
               type="text"
               className="BInputModel_text"
               value={'<text />'}
               disabled
            />
            <input
               type="text"
               id="input"
               draggable="true"
               onDragStart={componentDrag}
               className="BInputModel_text_clone"
               value={'<text />'}
            />
         </div>
      </div>
   );
};

export default BInputModel;
