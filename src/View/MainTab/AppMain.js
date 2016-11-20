'use strict';
import WZViewBase from 'src/View/Base';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TabBarIOS,
    StatusBar
} from 'react-native';

import { bindActionCreators }   from 'redux'
import { connect }              from 'react-redux'

import * as UserActions from 'src/Action/User/Main';
import * as NewsActions from 'src/Action/News/Main';

import WzNavigator      from 'src/View/Common/Navigator';
import NewsTab          from 'src/View/MainTab/NewsTab';
import LiveTab          from 'src/View/MainTab/LiveTab';
import BbsTab           from 'src/View/MainTab/BbsTab';
import UserTab          from 'src/View/MainTab/UserTab';
 
class AppMain extends WZViewBase{

  constructor(props) {
    super(props);
    this.state = { selectedTab: 'news' };
  }

  render() {
    debugLog(this.props);
    const { news, user, newsActions,userActions} = this.props;
    return (
        <TabBarIOS selectedTab={this.state.selectedTab} tintColor="white" barTintColor="red" >
        <TabBarIOS.Item
          title="新闻" 
          selected={this.state.selectedTab === 'news'}
          icon={require('src/Static/tab/news-icon.png')}
          selectedIcon={require('src/Static/tab/news-active-icon.png')}
          onPress={() => {
                this.setState({
                    selectedTab: 'news',
                });
          }}>
         <NewsTab news={news} actions={newsActions}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="直播" 
          selected={this.state.selectedTab === 'live'}
          icon={require('src/Static/tab/live-icon.png')}
          selectedIcon={require('src/Static/tab/live-active-icon.png')}
          onPress={() => {
                this.setState({
                    selectedTab: 'live',
                });
          }}>
            <WzNavigator component={LiveTab}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="论坛" 
          selected={this.state.selectedTab === 'bbs'}
          icon={require('src/Static/tab/bbs-icon.png')}
          selectedIcon={require('src/Static/tab/bbs-active-icon.png')}
          onPress={() => {
                this.setState({
                    selectedTab: 'bbs',
                });
          }}>
          <WzNavigator component={BbsTab}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="用户" 
          selected={this.state.selectedTab === 'user'}
          icon={require('src/Static/tab/user-icon.png')}
          selectedIcon={require('src/Static/tab/user-active-icon.png')}
          onPress={() => {
                this.setState({
                    selectedTab: 'user',
                });
          }}>
          <UserTab user={user} actions={userActions}/>
        </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}


const mapStateToProps       = state => ({
    news        :   state.news,
    user        :   state.user
})

const mapDispatchToProps    = dispatch => ({
    userActions: bindActionCreators(UserActions, dispatch),
    newsActions: bindActionCreators(NewsActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppMain)
