import React, { Component } from 'react'
import {AppRegistry,Text,StyleSheet,View} from 'react-native'
import Rate from './src/rate.js'
import Chart from './src/chart.js'
import News from './src/news.js'

export default class AwesomeProject extends Component {
  render() {
    return (
    <View style={{flex: 1}}>
    <View style={{flex:1, backgroundColor: 'darkblue'}} />
    <Chart />
    <View style={{
          backgroundColor: 'indianred',
          flexDirection: 'column',
          justifyContent: 'space-between',}}>
          <Rate name={'btc-e'} />
          <News />
    </View>
    <View style={{flex: 1, backgroundColor: 'lightcyan'}} />
    </View>

    );
  }}

  const styles = StyleSheet.create({
    stilbitka: {
      fontSize: 40
    },
  });


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
