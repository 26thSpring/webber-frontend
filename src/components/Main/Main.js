import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
   Intro,
   Login,
   Editor,
   Template,
   Community,
   PostView,
   Admin,
   ManageUser,
   ManageBoard,
   Analytics
} from 'pages';
const Main = () => {
   return (
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/editor" component={Editor} />
         <Route path="/template" component={Template} />
         <Route path="/community" component={Community} />
         <Route path="/PostView" component={PostView} />
         <Route path="/Admin" component={Admin} />
         <Route path="/ManageUser" component={ManageUser} />
         <Route path="/ManageBoard" component={ManageBoard} />
         <Route path="/Analytics" component={Analytics} />
         <Route path="/" component={Intro} />
      </Switch>
   );
};

export default Main;
