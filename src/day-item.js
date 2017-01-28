import React, { Component } from 'react';
import { Text} from 'react-native';

export default class AwesomeProject extends Component {
render() {

  return (<Text>{this.testapi()}</Text>)
}

testapi(){
  var url = 'https://shelmes.ru/api/v1/ecommerce/subcat_finder/7/';

	return fetch(url).then(function(response){
		return response.json();
	}).then(function(json){
		return json;
	});
}
}
