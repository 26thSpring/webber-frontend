import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Intro, Login, Community, PostView, Template, Editor } from 'pages';
const Main = () => {
   return (
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/editor" component={Editor} />
         <Route path="/template" component={Template} />
         <Route path="/community" component={Community} />
         <Route path="/PostView" component={PostView} />
         <Route path="/" component={Intro} />
      </Switch>
   );
};

export default Main;
