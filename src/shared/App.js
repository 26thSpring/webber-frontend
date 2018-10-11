import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './App.scss';
import { HeaderBack } from 'components/HeaderBack';
import { Header } from 'components/Header';
import { EditorHeader } from 'components/EditorHeader';
import { Main } from 'components/Main';

class App extends Component {
   render() {
      return (
         <div className="App">
            <HeaderBack />
            <Switch>
               <Route path="/editor" component={EditorHeader} />
               <Header />
            </Switch>
            <Main />
         </div>
      );
   }
}

export default hot(module)(App);
