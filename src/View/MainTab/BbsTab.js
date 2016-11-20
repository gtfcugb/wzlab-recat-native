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
                source={{uri:BBS_WEB_HOST+"/forum.php?mod=guide&action=hot"}}

        />
    );
  }
}
