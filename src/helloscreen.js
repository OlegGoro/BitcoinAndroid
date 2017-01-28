import React, { Component } from 'react';
import { AppRegistry, Alert } from 'react-native';
import AppIntro from 'react-native-app-intro';

export default class AwesomeProject extends Component {
  onSkipBtnHandle = (index) => {
    Alert.alert('Пропустить');
    console.log(index);
  }
  doneBtnHandle = () => {
    Alert.alert('Далее');
  }
  nextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    const pageArray = [{
      title: 'Лучшее заведения в одном приложении',
      img: 'http://www.clker.com/cliparts/k/k/b/b/8/c/shop-md.png',
      imgStyle: {
        height: 200,
        width: 250
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    },

    {
      title: 'Page 2',
      img: 'http://www.clker.com/cliparts/k/k/b/b/8/c/shop-md.png',
      imgStyle: {
        height: 200,
        width: 250
      },
      description: 'rgdf dfg dfgdf gdf gdfg dfgdfgfd',
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }];



    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}
