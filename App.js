import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import Header from "./components/Header";
import Constants from "expo-constants";
import TodoList from "./components/TodoList";
const statusBarHeight = Constants.statusBarHeight;
export default function App() {
  const [todos, setNewTodoItem] = React.useState([
    { text: "Sugar", key: "0" },
    { text: "Condons", key: "1" },
    { text: "Chocolad", key: "2" },
    { text: "Milk", key: "3" },
  ]);
  const addHandler = (text) => {
    setNewTodoItem((item) => {
      return [
        ...todos,
        { text: text, key: Math.random().toString(36).substring(7) },
      ];
    });
  };
  const deleteHandler = (key) => {
    setNewTodoItem((item) => {
      return item.filter((todos) => todos.key != key);
    });
  };
  console.log(todos);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoList
        todos={todos}
        addHandler={addHandler}
        deleteHandler={deleteHandler}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? statusBarHeight : 0,
  },
});
