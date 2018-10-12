import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './App.scss';
import { HeaderBack } from 'components/HeaderBack';
import { Header } from 'components/Header';
import { EditorHeader } from 'components/EditorHeader';
import { Main } from 'components/Main';
import ScrollUpButton from 'react-scroll-up-button';

class App extends Component {
   componentDidUpdate() {
      window.scrollTo(0, 0);
   }
   render() {
      return (
         <div className="App">
            <HeaderBack />
            <Switch>
               <Route path="/editor" component={EditorHeader} />
               <Header />
            </Switch>
            <Main />
            <div>
               <ScrollUpButton
                  TransitionClassName="ScrollUpButton__Toggled"
                  style={{ backgroundColor: 'rgba(112,72,232,0.7)' }}
               />
            </div>
         </div>
      );
   }
}

export default hot(module)(App);
