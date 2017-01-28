import React, { Component } from 'react'
import {AppRegistry,Text,StyleSheet,View} from 'react-native'
import Rate from './src/rate.js'
import Chart from './src/chart.js'

export default class AwesomeProject extends Component {
  render() {
    return (
    <View style={{flex: 1}}>
    <View style={{
          flexDirection: 'column',
          justifyContent: 'space-between',}}>
          <Rate name={'btc-e'} />
    <View style={{flex:1, backgroundColor: 'lightgrey'}} />



    </View>
        <Chart />
    <View style={{flex: 1, backgroundColor: 'lightgrey'}} />
    </View>

    );
  }}

  const styles = StyleSheet.create({
    stilbitka: {
      fontSize: 40
    },
  });


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
