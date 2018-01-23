//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
export class CardTypeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CardTypeScreen</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF3EF"
  }
});
