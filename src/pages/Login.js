import React from 'react';
import './Login.scss';
import { LoginForm } from 'components/LoginForm';
import { PageHeader } from 'components/PageHeader';

const Login = () => {
   return (
      <div className="LoginTemplate">
         <PageHeader name="login" />
         <div className="LoginSection">
            <LoginForm />
         </div>
      </div>
   );
};

export default Login;
