
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

var link
var index

//index - это номер новости. 0 - первая, 1 - вторая и т.д.

export default class BitcoinNews extends Component {

constructor() {
   super()
   this.state = {
      myText: 'Подождите'
   }
}
read()
{
  fetch('https://kanishkkunal.stdlib.com/rss2json?url=https%3A%2F%2Fbitnovosti.com%2Ffeed%2F')
  .then((response) => response.json())
  .then((responseJson) => {
  index = this.props.index
  title = responseJson.items[index].title
  link = responseJson.items[index].link
  this.setState({myText: title})
  })
}


  _onPress(){
    Linking.openURL(link).catch(err => console.error('An error occurred', err));
    }

  render() {
     return (
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
        {this.read()}
<TouchableOpacity onPress={this._onPress}>
         <Text style={{fontSize: 20}}>
              {this.state.myText}
         </Text>
</TouchableOpacity>

        </View>
     );
  }


}
