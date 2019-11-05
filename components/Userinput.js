import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../firebase';

export default class Buttonpressed extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            TextInputValue: '',
            random: 0
        }
    }

    myDatabase = firebase.database().ref('spanish');
    state = { list: {} }
  
    componentDidMount() {
      this.myDatabase.on('value', words => {
        const wordsJSON = words.val();
        this.setState({ words: wordsJSON === null ? {} : wordsJSON });
        console.log(wordsJSON);
      })
    }
    
    handleClick() {
        const rand = Math.floor(Math.random() * 8);
        this.setState({ random: this.state.random = rand});
        console.log(this.state.random);
        console.log();
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="New word" data={this.state.random} onPress={this.handleClick}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 50,
        backgroundColor: 'blue'
      },
});