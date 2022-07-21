/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import MainRoute from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider>
  );
};

export default App;
