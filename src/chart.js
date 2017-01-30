import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import Chart from 'react-native-chart';
import Moment from 'moment';

// Using https://github.com/tomauty/react-native-chart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        width: 400,
        height: 200,
    },
});


export default class ChartComponent extends Component {

  constructor() {
     super()
     this.state = {
        now: 'Подождите',
        one: 'Подождите',
        two: 'Подождите',
        three: 'Подождите',
        four: 'Подождите',
        five: 'Подождите',
        six: 'Подождите',
     }
  }

gethistoryrate(){
  fetch('https://api.blockchain.info/charts/market-price?format=json&timespan=7days')
    .then((response) => response.json())
    .then((responseJson) => {
  this.setState({now: responseJson.values[6].y,
    one: responseJson.values[5].y,
    two: responseJson.values[4].y,
    three: responseJson.values[3].y,
    four: responseJson.values[2].y,
    five: responseJson.values[1].y,
    six: responseJson.values[0].y})
    })


}
    render() {


      const data = [
          [Moment().subtract(6, 'days').date(), this.state.six],
          [Moment().subtract(5, 'days').date(), this.state.five],
          [Moment().subtract(4, 'days').date(), this.state.four],
          [Moment().subtract(3, 'days').date(), this.state.three],
          [Moment().subtract(2, 'days').date(), this.state.two],
          [Moment().subtract(1, 'days').date(), this.state.one],
          [Moment().date(), this.state.now],

      ]
        return (
            <View style={styles.container}>
            {this.gethistoryrate()}
                <Chart
                    style={styles.chart}
                    data={data}
                    verticalGridStep={5}
                    type="line"
                    showDataPoint={false}
                    xAxisHeight={40}
                 />
            </View>
        );
    }
}
