//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
export class CardDateScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CardDateScreen</Text>
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
