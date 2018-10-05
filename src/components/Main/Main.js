import React from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import { Intro, Login, Template } from 'pages';
=======
import { Intro, Login, Community } from 'pages';
>>>>>>> 7f77b402b2782a625735c41db288a0e89aadf83d

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
>>>>>>> 7f77b402b2782a625735c41db288a0e89aadf83d
         <Route path="/" component={Intro} />
      </Switch>
   );
};

export default Main;
