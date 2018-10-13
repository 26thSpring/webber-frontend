import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
   Intro,
   Login,
   Editor,
   Template,
   Community,
   PostView,
   Profile
} from 'pages';
const Main = () => {
   return (
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/editor" component={Editor} />
         <Route path="/template" component={Template} />
         <Route path="/community" component={Community} />
         <Route path="/postView" component={PostView} />
         <Route path="/profile" component={Profile} />
         <Route path="/" component={Intro} />
      </Switch>
   );
};

export default Main;
