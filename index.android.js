/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';

// ES6--引入外部文件
import HomeScreen from './test/HomeScreen';

AppRegistry.registerComponent('ReactNativeModuleProject', () => HomeScreen);
