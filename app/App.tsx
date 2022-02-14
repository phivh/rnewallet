import React from 'react';
import {StatusBar} from 'react-native';
import {Navigator} from 'navigation';
import {Provider} from 'react-redux';
import {configureStore} from 'store';
import {Colors} from 'theme';
import {server} from './server';

const {store} = configureStore();

server();

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.transparent} />
    <Navigator />
  </Provider>
);

export default App;
