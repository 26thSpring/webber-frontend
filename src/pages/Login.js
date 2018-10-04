import React from 'react';
import './Login.scss';
import { LoginForm } from 'components/LoginForm';

const Login = () => {
   return (
      <div className="LoginTemplate">
         <div className="LoginSection">
            <LoginForm />
         </div>
      </div>
   );
};

export default Login;
