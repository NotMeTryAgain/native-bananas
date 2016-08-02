/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, Image, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    width: 300,
    height: 50,
    backgroundColor: 'powderblue'
  },
  red: {
    color: 'red',
  },
});

 class LotsOfStyles extends Component {
   render() {
     return (
       <View>
         <Text style={styles.red}>just red</Text>
         <Text style={styles.bigblue}>just bigblue</Text>
         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
       </View>
     )
   }
 }

 class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

 class Blink extends Component {
   constructor(props) {
     super(props);
     this.state = {showText: true};

     // Toggle the state every second
     setInterval(() => {
       this.setState({ showText: !this.state.showText });
     }, 1000);
   }

   render() {
     let display = this.state.showText ? this.props.text : ' ';
     return (
       <Text style={styles.red}>{display}</Text>
     );
   }
 }

 class BlinkApp extends Component {
   render() {
     return (
       <View>
         <Blink text={this.props.text} />
       </View>
     );
   }
 }

 class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

 class FuckReactNative extends Component {
   render() {
     return (
       <View style={{alignItems: 'center'}}>
        <FixedDimensionsBasics />
        <LotsOfStyles />
        <Bananas />
        <BlinkApp text='Handing it down' />
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
     );
   }
 }

 AppRegistry.registerComponent('FuckReactNative', () => FuckReactNative);
