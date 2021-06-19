import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.headerText}>My React Native Todo List </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: "red",
    maxHeight: 125,
    paddingTop: 50,
    paddingBottom: 50,
  },
  headerText: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
});
export default Header;
