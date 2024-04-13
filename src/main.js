import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.bodyText}>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyConten: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 20,
    color: 'black',
  },
});

export default App;
