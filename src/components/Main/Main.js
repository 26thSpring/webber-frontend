import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Intro, Login } from 'pages';

const Main = () => {
   return (
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/editor" />
         <Route path="/template" />
         <Route path="/community" />
         <Route path="/" component={Intro} />
      </Switch>
   );
};

export default Main;
