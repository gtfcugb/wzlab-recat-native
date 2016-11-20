import WZViewBase from 'src/View/Base';

import React, { Component, PropTypes } from 'react';
import { Navigator,View, Text, TouchableHighlight } from 'react-native';


export default class WzNavigator extends WZViewBase {
  render() {
    return(
      <Navigator
        initialRoute={{name: '', component: this.props.component, index:0}}
        configureScene={()=>{return Navigator.SceneConfigs.PushFromRight;}}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return (
            <View style={{flex: 1,marginTop: 0}}>
              <Component navigator={navigator} route={route} {...route.passProps}/>
            </View>
          );
        }}/>
    );
  }
}
