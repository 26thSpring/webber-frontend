import React, { Component } from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaGoogle, FaFacebookSquare } from 'react-icons/fa';
import Naver_logo from 'static/images/naver_white.svg';
import { GoogleLogin } from 'react-google-login';
//import { GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { createBrowserHistory } from 'history';

const responseGoogle = response => {
   console.log(response);

   const { googleId, accessToken } = response;
   const { email, imageUrl } = response.profileObj;

   const user = {
      type: 'G',
      id: googleId,
      accessToken,
      email,
      thumbnail: imageUrl
   };

   console.log(user);
   if (response.accessToken) {
      fetch('http://localhost:9090/api/auth/login', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(user)
      })
         .then(res => {
            console.log(res);

            if (res.status === 400) {
               console.log(res.body);
               const browserHistory = createBrowserHistory();
               browserHistory.push('/register', user);
               browserHistory.go(0);
            }
         })
         .catch(err => {
            // 에러코드 -1 회원가입
            console.log(err.body);
            if (err.code === -1) {
               const browserHistory = createBrowserHistory();
               browserHistory.push('/register', user);
               browserHistory.go(0);
            }
         });
   }
};

const responseFacebook = response => {
   console.log('facebook' + JSON.stringify(response.email));
   const { id, accessToken } = response;
   const { email } = response;
   //const { picture } = response.data;

   const user = {
      type: 'F',
      id: id,
      accessToken,
      email,
      thumbnail: 'https://metadisplay.de/wp-content/uploads/2017/01/user_m.png'
   };
   console.log('user' + JSON.stringify(user));
   if (response.accessToken) {
      fetch('http://localhost:9090/api/auth/login', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(user)
      })
         .then(res => {
            //console.log(res);

            if (res.status === 400) {
               console.log(res.body);
               const browserHistory = createBrowserHistory();
               browserHistory.push('/register', user);
               browserHistory.go(0);
            }
         })
         .catch(err => {
            // 에러코드 -1 회원가입
            console.log(err.body);
            if (err.code === -1) {
               const browserHistory = createBrowserHistory();
               browserHistory.push('/register', user);
               browserHistory.go(0);
            }
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

   componentDidMount() {
      const naverLogin = new window.naver.LoginWithNaverId({
         clientId: 'Dw8kgklN2EzkVFun66kZ',
         callbackUrl: 'http://localhost:3000/auth/naver',
         isPopup: true /* 팝업을 통한 연동처리 여부 */,
         loginButton: {
            color: 'green',
            type: 3,
            height: 60
         } /* 로그인 버튼의 타입을 지정 */
      });
      /* 설정정보를 초기화하고 연동을 준비 */
      naverLogin.init();

      naverLogin.getLoginStatus(function(status) {
         if (status) {
            var email = naverLogin.user.getEmail();
            var profileImage = naverLogin.user.getProfileImage();

            console.log('이메일: ' + email);
            console.log('프로필사진: ' + profileImage);
         } else {
            console.log('AccessToken이 올바르지 않습니다.');
         }
      });
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
                  <div className="LoginForm_name">Google</div>
               </GoogleLogin>
            </div>
            <div>
               <FacebookLogin
                  appId="177648546460414"
                  autoLoad={false}
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
                        <div className="LoginForm_name">Facebook</div>
                     </div>
                  )}
               />
            </div>
            <div id="naverIdLogin" className="LoginForm_naver" onClick={null}>
               {/* <div className="LoginForm_logo_naver">N</div> */}
               <div className="LoginForm_logo_naver">
                  <img src={Naver_logo} alt="Naver" />
               </div>
               <div className="LoginForm_name">Naver</div>
            </div>

            <div className="LoginForm_bottom">
               <Link to="/template">look around without Login!</Link>
            </div>
         </div>
      );
   }
}
export default LoginForm;
