import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import rootReducer from 'store/modules';
import { Provider } from 'react-redux';

import './index.scss';
import Root from 'client/Root';
import registerServiceWorker from './registerServiceWorker';

const devTools =
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);
console.log(store.getState());

ReactDOM.render(
   <Provider store={store}>
      <Root />
   </Provider>,
   document.getElementById('root')
);
registerServiceWorker();
