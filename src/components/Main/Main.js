import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Intro, Login, Template } from 'pages';

const Main = () => {
   return (
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/editor" />
         <Route path="/template" component={Template} />
         <Route path="/community" />
         <Route path="/" component={Intro} />
      </Switch>
   );
};

export default Main;
