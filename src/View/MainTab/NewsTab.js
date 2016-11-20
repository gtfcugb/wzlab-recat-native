import WZViewBase from 'src/View/Base';

'use strict';
 
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  ListView,
  ScrollView,
  TouchableOpacity,
  WebView,
  Image,
  Button
} from 'react-native';

import NewsList from 'src/View/News/NewsList';

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
 
export default class NewsTab extends WZViewBase{
    constructor(props){
        super(props);
        this.props.actions.newsTabListGet();
    }

    render() {
        const {news,actions }   =  this.props;
        const {tabs }           =  news;
        debugLog("tabs",tabs)
        if(news.help.state == 0){
        return (
            <View style={{marginTop:20,flex:1,flexDirection:'column'}}>
            
              <View style={{height:50, backgroundColor: 'red',alignItems:"center",justifyContent: 'center'}}>
                <Image style={{height:45,resizeMode: 'contain'}} source={require("src/Static/logox.png")}/>

              </View>
              <ScrollableTabView
              style={{}} renderTabBar={() => <DefaultTabBar />}>

              {tabs.map(tabItem =>
                <NewsList key={tabItem.tid} tabLabel={tabItem.name} tabItem={tabItem} actions={actions}>{tabItem.name}</NewsList>
              )}
              </ScrollableTabView>
            </View>
        );
        }
        else{
          return (
            <View style={{marginTop:20,flex:1,flexDirection:'column'}}>
              <Button onPress={actions.newsContentBack} title="返回" 
              />
              <WebView
                source={{html: news.help.curNews.html}}
              />
            </View>
        )
        }
    }

}
