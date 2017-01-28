import React, { Component } from 'react'
import {View, Text} from 'react-native'

export default class Bitcoin extends Component {


   constructor() {
      super()
      this.state = {
         myText: 'Подождите'
      }
   }


getrate() {
  if (this.props.name == "average"){
  fetch('https://api.bitcoinaverage.com/ticker/global/USD/')
    .then((response) => response.json())
    .then((responseJson) => {
    this.setState({myText: responseJson.bid})
    })
  }

  if (this.props.name == "btc-e"){
  fetch('https://btc-e.nz/api/3/ticker/btc_usd')
    .then((response) => response.json())
    .then((responseJson) => {
    this.setState({myText: responseJson.btc_usd.avg})
    })
  }




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
