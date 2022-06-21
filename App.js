/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {View, Text} from 'react-native';
import Login from './src/modules/screens/LoginScreen/Login';
//  import Login from './src/modules/screens/Login/Login';

const App: () => Node = () => {
  return (
    <View>
      <Login />
      {/* <Text>hello react</Text> */}
    </View>
  );
};

export default App;
