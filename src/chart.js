import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import Chart from 'react-native-chart';

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

const data = [
    ['January 25', 800],
    ['January 26', 790],
    ['January 27', 820],
    ['January 28', 830],
    ['January 25', 800],
    ['January 26', 790],
    ['January 27', 820],
    ['January 28', 830],

];

export default class ChartComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
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
