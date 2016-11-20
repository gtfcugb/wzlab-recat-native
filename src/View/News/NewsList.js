import WZViewBase from 'src/View/Base';

'use strict';
 
import React, { Component } from 'react';
import {
  ListView, Navigator,View, Text, TouchableHighlight,TouchableOpacity,Image ,StyleSheet
} from 'react-native';

export default class Todo extends WZViewBase{
    constructor(props) {
      super(props);
      this.props.actions.newsListGet(this.props.tabItem.tid);
    }

    _pressRow(rowData){
      this.props.actions.newsContentGet(rowData.newsId);
    }

    _renderRow(rowData, sectionID: number, rowID: number) {
      debugLog("_renderRow",this.props)
      return (
        <TouchableOpacity onPress={() => {
          this._pressRow(rowData);
        }}>
          <View>
            <View style={styles.row}>
              <Image style={styles.thumb} source={{uri:rowData.img}} />
              <Text style={{flex:1,fontSize:14,color:'black'}}>
                  {rowData.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    render() {
      const {tabItem}   = this.props;
      var ds            = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      var dataSource    = ds.cloneWithRows(tabItem.dataSource);
      return (
        <ListView enableEmptySections={true}
          dataSource  = {dataSource}
          renderRow   = {this._renderRow.bind(this)}
        />
      );
    }
}

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 80,
    height: 60,
    marginRight:5
  },
});