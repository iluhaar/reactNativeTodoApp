import React from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

const InputForm = ({ addHandler }) => {
  const [text, setText] = React.useState("");
  const onTextChange = (text) => {
    setText(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onTextChange}
        placeholder="Type here.."
      />
      <View style={styles.buttonCon}>
        <Button
          color="green"
          title="Add New Todo"
          onPress={() => addHandler(text)}
        />
        <Button color="red" title="Clear All Todos" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: "25%",
    width: 350,
    backgroundColor: "white",
    margin: 12,
    borderWidth: 1,
    margin: 15,
    padding: 10,
  },
  buttonCon: {
    flexDirection: "row",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default InputForm;
