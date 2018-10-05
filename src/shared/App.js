import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './App.scss';
import { HeaderBack } from 'components/HeaderBack';
import { Header } from 'components/Header';
import { Main } from 'components/Main';

class App extends Component {
   render() {
      return (
         <div className="App">
            <HeaderBack />
            <Header />
            <Main />
         </div>
      );
   }
}

export default hot(module)(App);
