import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
   state = {
      SplitMe: null
   };
   handleClick = () => {
      import('SplitMe').then(({ default: SplitMe }) => {
         this.setState({
            SplitMe
         });
      });
   };
   render() {
      const { SplitMe } = this.state;
      return (
         <div>
            <div>
               <button onClick={this.handleClick}>Click me</button>
               {SplitMe && <SplitMe />}
            </div>
            <Menu />
            <Route exact path="/" component={Home} />
            <Switch>
               <Route path="/about/:name" component={About} />
               <Route path="/about" component={About} />
            </Switch>
            <Route path="/posts" component={Posts} />
         </div>
      );
   }
}

export default App;
