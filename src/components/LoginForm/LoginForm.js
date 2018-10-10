import React, { Component, Fragment } from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
//import { Router } from 'react-router';
//import { createBrowserHistory } from 'history';

class LoginForm extends Component {
   componentwillUpdate() {
      window.scrollTo(0, 0);
   }
   //    scrollToTop = e => {
   //       document.getElementById('root').scrollTo(0, 0);
   //    };
   render() {
      return (
         <Fragment>
            <div className="LoginForm">
               <div className="LoginForm_title">Make easy, Save time.</div>
               <div className="LoginForm_google">
                  <IconContext.Provider value={{ size: '30' }}>
                     <FaGoogle className="LoginForm_logo" />
                  </IconContext.Provider>
                  <div className="LoginForm_name">google</div>
               </div>
               <div className="LoginForm_facebook">
                  <IconContext.Provider value={{ size: '35' }}>
                     <FaFacebookSquare className="LoginForm_logo" />
                  </IconContext.Provider>
                  <div className="LoginForm_name">facebook</div>
               </div>
               <div className="LoginForm_naver">
                  <div className="LoginForm_logo_naver">N</div>
                  <div className="LoginForm_name">naver</div>
               </div>

               <div className="LoginForm_bottom">
                  <Link to="/template" onClick={this.componentwillUpdate}>
                     look around without Login!
                  </Link>
                  {/* <Router
                     onUpdate={() => window.scrollTo(0, 0)}
                     history={createBrowserHistory()}
                  >
                  </Router> */}
               </div>
            </div>
         </Fragment>
      );
   }
}
export default LoginForm;
