import React from 'react';
import './EditorHeader.scss';
import { HeaderLogo } from 'components/HeaderLogo';
import { MdMoreVert } from 'react-icons/md';
import { IconContext } from 'react-icons';
import html2canvas from 'html2canvas';
import { read_cookie } from 'sfcookies';

const EditorHeader = () => {
   const fileDownLoad = () => {
      console.log(document.getElementsByClassName('EditorView')[0].innerHTML);

      html2canvas(document.getElementsByClassName('EditorView')[0]).then(
         canvas => {
            const data = canvas.toDataURL('image/png', 0.9);
            const src = encodeURI(data);

            console.log(src);

            //document.getElementById('screenshot').src = src;
         }
      );
   };
   //    nickname
   //    htmlCont
   //    thumbnail
   const fileUpload = () => {
      const user = JSON.parse(localStorage.getItem('webber_user'));

      const formData = new FormData();

      formData.append('access_token', read_cookie('access_token'));
      formData.append(
         'htmlCont',
         document.getElementsByClassName('EditorView')[0].innerHTML
      );

      if (localStorage.getItem('webber_user')) {
         console.log(
            document.getElementsByClassName('EditorView')[0].innerHTML
         );

         html2canvas(document.getElementsByClassName('EditorView')[0])
            .then(canvas => {
               const data = canvas.toDataURL('image/png', 0.9);
               const src = encodeURI(data);

               console.log(src);
               formData.append('photo', src);
               //document.getElementById('screenshot').src = src;
            })
            .then(() => {
               fetch('http://localhost:9090/api/template', {
                  method: 'post',
                  body: formData
               }).then(res => {
                  res.json().then(data => {
                     if (data.result === 'success') {
                        console.log(data);
                        setTimeout(() => {
                           window.location.href = '/template';
                        }, 3000);
                        //window.location.replace('/template');
                     }
                  });
               });
            });
      }
   };
   return (
      <div className="EditorHeader">
         <div className="EditorHeader_title">
            <HeaderLogo />
            <div className="EditorHeaderTitle">webber Editor</div>
         </div>
         <div className="EditorHeader_btns">
            {/* <div className="EditorHeader_btn_download" onClick={fileDownLoad}>
               다운로드
            </div> */}
            <div className="EditorHeader_btn_save" onClick={fileUpload}>
               저장하기
            </div>
            {/* <IconContext.Provider
               value={{ size: 27, className: 'EditorHeader_btns_more' }}
            >
               <MdMoreVert />
            </IconContext.Provider> */}
         </div>
      </div>
   );
};

export default EditorHeader;
