export default class Bitcoin extends Component {


   constructor() {
      super()
      this.state = {
         myText: 'My Original Text'
      }
   }


getrate() {
  return fetch('https://api.bitcoinaverage.com/ticker/global/USD/')
    .then((response) => response.json())
    .then((responseJson) => {
    this.setState({myText: responseJson.bid})
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
