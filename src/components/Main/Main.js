import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
   Intro,
   Login,
   Register,
   Editor,
   Template,
   Community,
   PostView,
   PostWriter,
   Profile
   //PostViewFooter
} from 'pages';
const Main = () => {
   return (
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
         <Route path="/editor" component={Editor} />
         <Route path="/template" component={Template} />
         <Route path="/community" component={Community} />
         <Route path="/postview/:board_id" component={PostView} />
         {/* <Route path="/postview/:board_id" component={PostViewFooter} /> */}
         <Route path="/postwriter" component={PostWriter} />
         <Route path="/profile/:nickname" component={Profile} />
         <Route path="/" component={Intro} />
      </Switch>
   );
};

export default Main;
