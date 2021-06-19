import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TodoListItem = ({ todoItem, deleteHandler }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => deleteHandler(todoItem.key)}>
        <Text style={styles.todosItem}>{todoItem.text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  todosItem: {
    color: "white",
    backgroundColor: "cyan",
    padding: 5,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    borderWidth: 1,
    marginTop: "5%",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: "5%",
  },
});
export default TodoListItem;
