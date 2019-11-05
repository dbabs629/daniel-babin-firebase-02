import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from './firebase';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.num = {
      random: 0
    }
  }

  myDatabase = firebase.database().ref('spanish');
  state = { list: {}, result: '' }

  handleClick() {
    const rand = Math.floor(Math.random() * 4);
    this.setState({ random: this.num.random = rand });
    this.myDatabase.on('value', words => {
      const wordsJSON = words.val();
      this.setState({ words: wordsJSON === null ? {} : wordsJSON });
      const theObj = Object.keys(this.state.words).map(wordArray => ({[wordArray]: words[wordArray]}));
      this.setState({result: theObj[this.num.random]});
      console.log(theObj[this.num.random]);
      console.log(this.state.result);
    })
    console.log(this.num.random);
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Spanish Words</Text>
        {/* <Text>{this.state.result['']}</Text> */}
        <Text>{this.state.result['']}</Text>
        <Button title="New word" onPress={this.handleClick}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    marginBottom: 25
  }
});
