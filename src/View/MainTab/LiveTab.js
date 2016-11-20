'use strict';

import WZViewBase from 'src/View/Base';

 
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  WebView
} from 'react-native';

 
export default class LiveTab extends WZViewBase{
  render() {
    return (
      <WebView
          source={{uri:"https://dev.pydp888.com/live/"}}
        />
    );
  }
}
