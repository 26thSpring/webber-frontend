import React, { Component } from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaGoogle, FaFacebookSquare } from 'react-icons/fa';
import Naver_logo from 'static/images/naver_icon.svg';
import { GoogleLogin } from 'react-google-login';
//import { GoogleLogout } from 'react-google-login';
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const responseGoogle = response => {
<<<<<<< HEAD
   console.log(response);
=======
   console.log('response' + response);
>>>>>>> 2c5bf3ffd5910e93d730dce9546b36ab28bdc4b5
   if (response.accessToken) {
      fetch('http://localhost:9090', {
         //credentials: 'same-origin',
         method: 'POST',
         header: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(response)
      }).then(res => {
         console.log('res' + res);
      });
   }
};

      fetch('http://localhost:8080', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(response)
      }).then(res => {
         console.log('res' + res);
      });
   }
};

class LoginForm extends Component {
   linkToNaverLogin() {
      console.log('dddd');
      window.open(
         'http://localhost:9090/login',
         'naverLogin',
         'width:100px, height:300px'
      );
   }
   componentwillUpdate() {
      window.scrollTo(0, 0);
   }

   render() {
      return (
         <div className="LoginForm">
            <div className="LoginForm_title">Make easy, Save time.</div>
            {/* <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} /> */}
            <div>
               <GoogleLogin
                  className="LoginForm_google"
                  clientId="961890564278-7tds7bjmf82km0e491bc2b68tuotjrnt.apps.googleusercontent.com"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
               >
                  <IconContext.Provider value={{ size: '30' }}>
                     <FaGoogle className="LoginForm_logo" />
                  </IconContext.Provider>
                  <div className="LoginForm_name">google</div>
               </GoogleLogin>
            </div>
            <div>
               <FacebookLogin
                  appId="177648546460414"
                  autoLoad={true}
                  fields="name,email,picture"
                  onClick={null}
                  callback={responseFacebook}
                  render={renderProps => (
                     <div
                        className="LoginForm_facebook"
                        onClick={renderProps.onClick}
                     >
                        <IconContext.Provider value={{ size: '35' }}>
                           <FaFacebookSquare className="LoginForm_logo" />
                        </IconContext.Provider>
                        <div className="LoginForm_name">페이스북</div>
                     </div>
                  )}
               />
            </div>
            <div className="LoginForm_naver" onClick={this.linkToNaverLogin}>
               {/* <div className="LoginForm_logo_naver">N</div> */}
               <div className="LoginForm_logo_naver">
                  <img src={Naver_logo} alt="Naver" />
               </div>
               <div className="LoginForm_name">naver</div>
            </div>

            <div className="LoginForm_bottom">
               <Link to="/template">look around without Login!</Link>
            </div>
         </div>
      );
   }
}
export default LoginForm;
