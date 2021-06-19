import React from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import InputForm from "./InputForm";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, addHandler, deleteHandler }) => {
  return (
    <View style={styles.box}>
      <ScrollView style={styles.todosCon}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoListItem todoItem={item} deleteHandler={deleteHandler} />
          )}
        />
      </ScrollView>
      <InputForm addHandler={addHandler} />
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2094bd",
    alignItems: "center",
    height: "100%",
    marginTop: 0,
  },
  todosCon: {
    margin: "10%",
    borderColor: "black",
    borderRadius: 15,
    width: "75%",
    height: "25%",
  },
});

export default TodoList;
