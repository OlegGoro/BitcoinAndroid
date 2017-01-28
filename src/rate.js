import React, { Component } from 'react'
import {View, Text} from 'react-native'

export default class Bitcoin extends Component {


   constructor() {
      super()
      this.state = {
         myText: 'My Original Text'
      }
   }


getrate() {
  fetch('https://api.bitcoinaverage.com/ticker/global/USD/')
    .then((response) => response.json())
    .then((responseJson) => {
    this.setState({myText: '800'})
    })
}



   render() {
      return (
         <View>
         {this.getrate()}
          <Text>
               {this.state.myText}
          </Text>
         </View>
      );
   }



 }
