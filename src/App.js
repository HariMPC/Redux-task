// App.js
import React from 'react';
import { Provider } from 'react-redux';


import Cart from './Components/Cart/CartPage';
import store from './Components/Store/StoreRedux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Cart/>
      </div>
    </Provider>
  );
}

export default App;