import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {ccc} from './mxlib';

export default class App extends React.Component {
  render() {
    ccc('in App render()...')
    return (
      <View style={styles.ViewSt}>
        <Text>r02, K8I. Hello world</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ViewSt: {
    flex: 1,
    backgroundColor: 'cyan',
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3,
  },
})