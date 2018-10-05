import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Intro, Login, Community, PostView } from 'pages';

const Main = () => {
   return (
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/editor" />
         <Route path="/template" />
         <Route path="/community" component={Community} />
         <Route path="/PostView" component={PostView} />
         <Route path="/" component={Intro} />
      </Switch>
   );
};

export default Main;
