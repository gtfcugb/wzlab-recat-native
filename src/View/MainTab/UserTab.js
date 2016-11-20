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
  Image
} from 'react-native';

import Todo from 'src/View/User/Todo';

export default class UserTab extends WZViewBase{
  render() {
        const {user,actions}            =   this.props;
        const {userAIncr,userBIncr}     =   actions;
        debugLog("actions",actions);
        var colors      =   ['#F4000B', '#17B4FF', '#FFD900'];
        var tags        = ['U', 'A', 'D'];
        var items       = ['我的收藏', '我的订阅', '我的商城'];
        var components  = [Todo, Todo, Todo];
        var JSXDOM      = [];
        for(var i in items){
          JSXDOM.push(
            <TouchableOpacity key={items[i]} >
              <View style={[styles.item, {flexDirection:'row'}]}>
                <Text style={[styles.tag, {color: colors[i]}]}>{tags[i]}</Text>
                <Text style={[styles.font,{flex:1}]}>{items[i]}</Text>
              </View>
            </TouchableOpacity>
          );
        }

        return (
          <ScrollView style={styles.container}>
            <View style={styles.header,{flexDirection:'column'}}>
                <View style={[styles.item,{backgroundColor: 'red'}, {flexDirection:'row'}]}>
                  <Text style={[{flex:1},{color: "white",paddingLeft:5}]}>设置</Text>
                  <Text style={[{flex:3}]}></Text>
                  <Text style={[{flex:1},{color: "white",paddingRight:5,textAlign: 'right'}]}>账号管理</Text>
                </View>
                <View style={[{height:100},{flexDirection:'column',backgroundColor: 'red',alignItems:"center",justifyContent: 'center'}]}>
                    <Image style={styles.image} source={{uri: 'https://splat.dev.pydp888.com/Static//resource//0/1/2/20161116/493f391e7c45d3e552999d7039ea4e6b.png'}}/>
                    <Text style={{marginTop:10,marginBottom:10,color: "white",textAlign: 'center'}}>wz_200001</Text>
                </View>
                <View style={[{height:60}, {backgroundColor: 'red'},{flexDirection:'row',alignItems: "center"}]}>
                    <View style={[{height:60},{flex:1},{backgroundColor: '#F47983'},{marginRight:1},{alignItems:"center",justifyContent: 'center'}]}>
                        <Text style={{color: "white",textAlign: 'center'}}>发帖数10</Text>
                    </View>
                    <View style={[{height:60},{flex:1},{backgroundColor: '#F47983'},{marginRight:1},{alignItems:"center",justifyContent: 'center'}]}>
                        <Text style={{color: "white",textAlign: 'center'}}>金币120</Text>
                    </View>
                    <View style={[{height:60},{flex:1},{backgroundColor: '#F47983'},{marginRight:1},{alignItems:"center",justifyContent: 'center'}]}>
                        <Text style={{color: "white",textAlign: 'center'}}>经验值120</Text>
                    </View>

                </View>
            </View>

            <View style={styles.wrapper}>
              {JSXDOM}
            </View>

            <View style={{marginTop:30}}>
              <TouchableOpacity onPress={this._clear}>
                <View style={[styles.item, {flexDirection:'row'}]}>
                  <Text style={[styles.tag, {color: colors[i]}]}>Q</Text>
                  <Text style={[styles.font,{flex:1}]}>账号绑定</Text>
                </View>
                <View style={[styles.item, {flexDirection:'row'}]}>
                  <Text style={[styles.tag, {color: colors[i]}]}>P</Text>
                  <Text style={[styles.font,{flex:1}]}>推送新闻</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{marginTop:5}}>
              <TouchableOpacity onPress={userBIncr}>
                <View style={[styles.item, {flexDirection:'row'}]}>
                  <Text style={[styles.font,{flex:1}]}>点我测试A</Text>
                  <Text style={{flex:1}}>{user.A.content}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{marginTop:5}}>
              <TouchableOpacity onPress={userAIncr}>
                <View style={[styles.item, {flexDirection:'row'}]} >
                  <Text style={[styles.font,{flex:1}]}>点我测试B</Text>
                  <Text style={{flex:1}}>{user.B.content}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5',
    },
    item:{
        height:40,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor:'#fff',
        alignItems:'center',
    },
    font:{
        fontSize:15,
        marginLeft:5,
        marginRight:10,
    },
    header:{
        height:220,
        backgroundColor: 'red',
        marginTop:0,
    },
    wrapper:{
        marginTop:5,
    },
    tag:{
        marginLeft:10,
        fontSize:16,
        fontWeight:'bold'
    },
    image: {
        height: 60,
        borderRadius: 30,
        width: 60
      }
});