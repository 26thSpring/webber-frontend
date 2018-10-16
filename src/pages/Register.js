import React from 'react';
import './Register.scss';
import { RegisterForm } from 'components/RegisterForm';

const Register = ({ location }) => {
   const user = location.state;
   return (
      <div className="RegisterTemplate">
         <div className="RegisterSection">
            <RegisterForm user={user} />
         </div>
      </div>
   );
};

export default Register;
