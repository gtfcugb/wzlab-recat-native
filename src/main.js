import "./global.js"
import WZViewBase from 'src/View/Base';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createStore,applyMiddleware } from 'redux';
import createLogger from 'redux-logger'

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TabBarIOS,
  StatusBar
} from 'react-native';
import AppMain          from 'src/View/MainTab/AppMain';

import mainReduce       from 'src/Reduce/Main'

global.store  =  createStore(mainReduce, applyMiddleware(
    thunkMiddleware,
    createLogger()
));

class wzlab extends WZViewBase {

  render() {
    return (
      <Provider store={global.store}>
      <AppMain />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('wzlab', () => wzlab);