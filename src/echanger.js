import React, { Component } from 'react'
import {AppRegistry,Text,StyleSheet,View} from 'react-native'

var summ; //summ to echange
var currency ; //currency BTC or USD




export default class Echanger extends Component {

  constructor() {
     super()
     this.state = {
        myText: 'Подождите'
     }
  }

    render() {
summ = this.props.summ;
currency  = this.props.currency;


fetch('https://api.bitcoinaverage.com/ticker/global/USD/')
  .then((response) => response.json())
  .then((responseJson) => {
  var average = (responseJson.bid + responseJson.ask) / 2
  if (currency == "BTC"){
  this.setState({myText: summ * average})
  }
  if (currency == "USD"){
  this.setState({myText: summ / average})
  }
  })

 return (
   <View>
    <Text style={{fontSize: 40}}>
    {this.state.myText}
    </Text>
   </View>
 )
}



}
