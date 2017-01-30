
import React, {
  Component,
} from 'react'

import {
  TouchableOpacity,
  View,
  Text,
  Linking,
  Image,

} from 'react-native'




export default class BitcoinNews extends Component {

constructor() {
   super()
   this.state = {
      myText: 'Подождите'
   }
}
getrate()
{
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fbitnovosti.com%2Ffeed%2F&api_key=9stceemozrnumtdixax1s1jo955hb0qpzfy7aos4&count=20')
  .then((response) => response.json())
  .then((responseJson) => {
  var average = responseJson.items[1].title
  var average2 = responseJson.items[1].description
  this.setState({myText: average})
  })
}




  _onPress(){
    Linking.openURL("https://facebook.github.io/react-native/docs/linking.html").catch(err => console.error('An error occurred', err));
    }

  render() {
     return (
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
        {this.getrate()}
<TouchableOpacity onPress={this._onPress}>
         <Text style={{fontSize: 25}}>
              {this.state.myText}
         </Text>
</TouchableOpacity>

        </View>
     );
  }


}
