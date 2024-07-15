import * as React from 'react';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import store from './src/store/store';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
