import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {
   return (
      <div className="LoginForm">
         <div className="LoginHeader">login with</div>
         <div className="LoginBody">
            <div className="login_button_google">구글</div>
            <div className="login_button_facebook">페이스북</div>
            <div className="login_button_naver">네이버</div>
         </div>
      </div>
   );
};

export default LoginForm;
