import React, { Component } from 'react';
import './Profile.scss';
import { ProfileHead } from 'components/ProfileHead';
import { ProfileBody } from 'components/ProfileBody';

class Profile extends Component {
   state = {
      data: {}
   };
   componentDidMount() {
      //console.log(this.props.match.params);
      if (this.props.match.params) {
         fetch(
            'http://localhost:9090/api/user/' + this.props.match.params.nickname
         ).then(res => {
            console.log(res);
            res.json().then(data => {
               this.setState({
                  data
               });

               console.log(data);
            });
         });
      }
   }
   render() {
      return (
         <div className="ProfileTemplate">
            <div className="ProfileHead_mobile_head" />
            <div className="ProfileSection">
               <ProfileHead data={this.state.data} />
               <ProfileBody data={this.state.data} />
            </div>
         </div>
      );
   }
}
export default Profile;
