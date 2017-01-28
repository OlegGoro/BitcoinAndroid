import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'

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
    var average = (responseJson.bid + responseJson.ask) / 2
    this.setState({myText: average})
    })
  }

  if (this.props.name == "btc-e"){
  fetch('https://btc-e.nz/api/3/ticker/btc_usd')
    .then((response) => response.json())
    .then((responseJson) => {
    this.setState({myText: responseJson.btc_usd.avg})
    })
  }

  if (this.props.name == "btcmarkets"){
  fetch('https://api.btcmarkets.net/market/BTC/AUD/tick')
    .then((response) => response.json())
    .then((responseJson) => {
    var average = (responseJson.bestBid + responseJson.bestAsk) / 2;
    this.setState({myText: average})
    })
  }

    if (this.props.name == "cex"){
    fetch('https://cex.io/api/ticker/BTC/USD')
      .then((response) => response.json())
      .then((responseJson) => {
      var average = (responseJson.bid + responseJson.ask) / 2;
      this.setState({myText: average})
      })

  }
}


   render() {
      return (
         <View>
         {this.getrate()}
          <Text style={{fontSize: 40}}>
               {this.state.myText}
          </Text>
         </View>
      );
   }





 }
