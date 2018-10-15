import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './App.scss';
import { HeaderBack } from 'components/HeaderBack';
import { Header } from 'components/Header';
import { EditorHeader } from 'components/EditorHeader';
import { Main } from 'components/Main';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';

class App extends Component {
   componentDidMount() {
      fetch('http://localhost:8080').then(res => console.log(res));
   }
   componentDidUpdate() {
      window.scrollTo(0, 0);
   }
   render() {
      return (
         <div className="App">
            <Switch>
               <Route path="/postwriter" component={null} />
               <HeaderBack />
            </Switch>
            <Switch>
               <Route path="/postwriter" component={null} />
               <Route path="/editor" component={EditorHeader} />
               <Header />
            </Switch>
            <Main />
            <div>
               <ScrollUpButton
                  TransitionClassName="ScrollUpButton__Toggled"
                  style={{
                     width: '3.3rem',
                     height: '3.3rem',
                     paddingLeft: '0.5rem',
                     paddingRight: '0.5rem',
                     paddingTop: '0.3rem',
                     backgroundColor: '#3b5bdb',
                     borderRadius: '50%',
                     fill: 'white'
                  }}
               />
            </div>
         </div>
      );
   }
}

export default hot(module)(App);
