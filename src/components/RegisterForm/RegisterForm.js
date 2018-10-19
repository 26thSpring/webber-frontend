import React from 'react';
import './RegisterForm.scss';
import { MdArrowForward } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { createBrowserHistory } from 'history';

const RegisterForm = ({ user }) => {
   //    const handleRedirect = () => {
   //       console.log('클릭!');
   //       const browserHistory = createBrowserHistory();
   //       console.log(browserHistory);
   //       browserHistory.push('/login', 'hihi');
   //       browserHistory.go(0);
   //    };
   console.log(user);
   return (
      <div className="RegisterForm">
         <form action="http://localhost:9090/api/auth/register" method="POST">
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
