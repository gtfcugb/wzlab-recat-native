import WZViewBase from 'src/View/Base';

'use strict';
 
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  WebView
} from 'react-native';

 
export default class BbsTab extends WZViewBase{
  render() {
    return (
      <WebView
                source={{uri:"https://bbs-dev.pydp888.com/forum.php?mod=guide&action=hot"}}

        />
    );
  }
}
