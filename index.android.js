import React, { Component } from 'react'
import {AppRegistry,StyleSheet,Text,View} from 'react-native'
import Rate from './src/rate.js'
import Chart from './src/chart.js'
import News from './src/news.js'

export default class AwesomeProject extends Component {
  render() {
    return (
<<<<<<< HEAD
    <View style={{flex: 2,justifyContent: 'center',
        alignItems: 'center'}}>
    <Text> Bitcoin: </Text>
    <View style={{flex:1, backgroundColor: 'lightgrey'}} />
=======
    <View style={{flex: 1}}>
    <View style={{flex:1, backgroundColor: 'darkblue'}} />
    <Chart />
>>>>>>> origin/master
    <View style={{
          backgroundColor: 'indianred',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',}}>
          <Rate name={'btc-e'} />
<<<<<<< HEAD

=======
          <News />
>>>>>>> origin/master
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
