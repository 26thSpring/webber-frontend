import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {
   return (
      <div className="LoginForm">
         <div className="LoginHeader">SignIn / SignUp with</div>
         <div className="LoginBody">
            <div className="login_button_google">
               <div className="Google" />
               <div className="Google">Google</div>
            </div>
            <div className="login_button_facebook">
               <div className="Facebook">FaceBook</div>
            </div>
            <div className="login_button_naver">
               <div className="Naver">Naver</div>
            </div>
         </div>
      </div>
   );
};

export default LoginForm;
