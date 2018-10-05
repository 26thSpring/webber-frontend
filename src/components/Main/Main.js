import React from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import { Intro, Login, Community, PostView } from 'pages';
=======
<<<<<<< HEAD
import { Intro, Login, Template } from 'pages';
=======
import { Intro, Login, Community } from 'pages';
>>>>>>> 7f77b402b2782a625735c41db288a0e89aadf83d
>>>>>>> 892efd2b2d66c38fce4f5e024753e65183640abb

const Main = () => {
   return (
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/editor" />
<<<<<<< HEAD
         <Route path="/template" component={Template} />
         <Route path="/community" />
=======
         <Route path="/template" />
         <Route path="/community" component={Community} />
<<<<<<< HEAD
         <Route path="/PostView" component={PostView} />
=======
>>>>>>> 7f77b402b2782a625735c41db288a0e89aadf83d
>>>>>>> 892efd2b2d66c38fce4f5e024753e65183640abb
         <Route path="/" component={Intro} />
      </Switch>
   );
};

export default Main;
