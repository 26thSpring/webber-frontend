import React from 'react';
import './Register.scss';
import { RegisterForm } from 'components/RegisterForm';

const Register = () => {
   return (
      <div className="RegisterTemplate">
         <div className="RegisterSection">
            <RegisterForm />
         </div>
      </div>
   );
};

export default Register;
