import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

import { createStore } from 'redux';
import rootReducer from 'store/modules';
import { Provider } from 'react-redux';

const devTools =
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);
console.log(store.getState());

const Root = () => (
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>
);

export default Root;
