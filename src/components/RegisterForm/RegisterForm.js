import React from 'react';
import './RegisterForm.scss';
import { MdArrowForward } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { createBrowserHistory } from 'history';
import { bake_cookie } from 'sfcookies';

const RegisterForm = ({ user }) => {
   console.log(user);

   const registerSubmit = e => {
      e.preventDefault();
      const formData = new FormData(document.getElementById('form_register'));

      console.log(document.getElementById('form_register'));
      console.log(formData.get('email'));
      fetch('http://localhost:9090/api/auth/register', {
         method: 'post',
         body: formData
      }).then(res => {
         console.log(res);
         res.json().then(data => {
            localStorage.setItem('webber_user', JSON.stringify(data.userVo));
            bake_cookie('access_token', data.token);
            window.location.replace('/');
         });
      });
   };
   return (
      <div className="RegisterForm">
         <form
            id="form_register"
            action="http://localhost:9090/api/auth/register"
            method="POST"
            onSubmit={registerSubmit}
         >
            <div className="RegisterForm_header">
               <div className="RegisterForm_header_title">
                  webber&nbsp;
                  <span> / 회원가입</span>
               </div>
               <div className="RegisterForm_header_info">
                  기본 회원정보 등록
               </div>
            </div>
            <div className="RegisterForm_body">
               <div className="RegisterForm_body_email register_input_form">
                  <div>
                     이메일&nbsp;
                     <span>*</span>
                  </div>
                  <input
                     type="text"
                     name="email"
                     value={user && user.email}
                     readOnly
                  />
               </div>
               <div className="RegisterForm_body_nickname register_input_form">
                  <div>
                     아이디&nbsp;
                     <span>*</span>
                  </div>
                  <input
                     name="nickname"
                     type="text"
                     placeholder="아이디를 입력하세요."
                  />
               </div>
               <div className="RegisterForm_body_introduce register_input_form">
                  <div>한 줄 소개</div>
                  <input
                     name="intro"
                     type="text"
                     placeholder="당신을 표현해 보세요."
                  />
               </div>
               <input type="hidden" name="type" value={user && user.type} />
               <input type="hidden" name="id" value={user && user.id} />
               <input
                  type="hidden"
                  name="accessToken"
                  value={user && user.accessToken}
               />
               <input
                  type="hidden"
                  name="thumbnail"
                  value={user && user.thumbnail}
               />
            </div>
            <div className="RegisterForm_footer">
               <label htmlFor="register_submit">
                  <div className="RegisterForm_footer_btn_submit">
                     다음
                     <IconContext.Provider
                        value={{
                           size: '20',
                           color: 'white'
                        }}
                     >
                        <div
                           style={{
                              marginLeft: '0.3rem',
                              paddingTop: '0.2rem'
                           }}
                        >
                           <MdArrowForward />
                        </div>
                     </IconContext.Provider>
                  </div>
               </label>
               <input id="register_submit" type="submit" value="다음" />
            </div>
         </form>
      </div>
   );
};

export default RegisterForm;
