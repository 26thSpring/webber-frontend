import React, { Component, Fragment } from 'react';
import { LoginForm } from 'components/LoginForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'store/modules/auth';

class AuthContainer extends Component {
   handleRequestAuth = e => {
      const { AuthActions } = this.props;
      AuthActions.authNaver('true');
   };

   handleInitAuth = e => {
      const { AuthActions } = this.props;
      AuthActions.initAuth('false');
   };

   render() {
      console.log(this.props.auth);
      const { handleRequestAuth } = this;
      const { authState } = this.props;
      return (
         <Fragment>
            <LoginForm auth={authState} />
         </Fragment>
      );
   }
}

export default connect(
   ({ auth }) => ({
      // immutable 을 사용하니, 값을 조회 할 때는 .get 을 사용
      authState: auth.get('authState')
   }),
   dispatch => ({
      AuthActions: bindActionCreators(authActions, dispatch)
   })
)(AuthContainer);
