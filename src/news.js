
import React, {
  Component,
} from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native'

export default class Bitcoin extends Component {

constructor() {
   super()
   this.state = {
      myText: 'Подождите',
      myText2: 'Подождите'
   }
}
getrate()
{fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fbitnovosti.com%2Ffeed%2F')
  .then((response) => response.json())
  .then((responseJson) => {
  var average = responseJson.items[1].title
  var average2 = responseJson.items[1].description
  this.setState({myText: average})
  this.setState({myText2: average2})
  })}

onPressButton(){
Linking.openURL("https://facebook.github.io/react-native/docs/linking.html").catch(err => console.error('An error occurred', err));

}

  render() {
     return (
        <View>
        {this.getrate()}
        <TouchableOpacity onPress={() => this.onPressButton()}>
         <Text style={{fontSize: 25}}>
              {this.state.myText}
         </Text>

         <Text style={{fontSize: 15}}>
              {this.state.myText2}
         </Text>
         </TouchableOpacity>
        </View>
     );
  }


}
