import React, { Component } from 'react'
import {AppRegistry,Text,View} from 'react-native'
import HelloScreen from './src/helloscreen.js'

export default class AwesomeProject extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}} />
        <View style={{height:300, backgroundColor: '#FAFAFA'}} />
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
