import React from 'react';
import './LoginForm.scss';
import login_google from 'static/images/login_google.svg';
import login_facebook from 'static/images/login_facebook.svg';

const LoginForm = () => {
   return (
      <div className="LoginForm">
         <div className="LoginHeader">SignIn / SignUp with</div>
         <div className="LoginBody">
            <div className="login_button_google">
               <div className="Google">
                  <img src={login_google} alt="login_google" />
               </div>
               <div className="Google">Google</div>
            </div>
            <div className="login_button_facebook">
               <img src={login_facebook} alt="login_facebook" />
               <div className="Facebook">FaceBook</div>
            </div>
            <div className="login_button_naver">
               <img src="" alt="" />
               <div className="Naver">Naver</div>
            </div>
         </div>
      </div>
   );
};

export default LoginForm;
