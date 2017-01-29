import React, { Component } from 'react'
import {AppRegistry,StyleSheet,Text,View} from 'react-native'
import Rate from './src/rate.js'
import Chart from './src/chart.js'

export default class AwesomeProject extends Component {
  render() {
    return (
    <View style={{flex: 2,justifyContent: 'center',
        alignItems: 'center'}}>
    <Text> Bitcoin: </Text>
    <View style={{flex:1, backgroundColor: 'lightgrey'}} />
    <View style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',}}>
          <Rate name={'btc-e'} />

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
