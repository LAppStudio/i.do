import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';

import {Provider as ReduxProvider} from 'react-redux';
import {store} from './store';

import Navigation from './navigation';

const App: () => Node = () => {
  return (
  <SafeAreaView>
    <ReduxProvider {...{store}}>
      <Navigation />
    </ReduxProvider>
  </SafeAreaView>);
};

export default App;
