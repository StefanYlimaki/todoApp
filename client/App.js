import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function toggleModalVisibility() {
    setModalIsVisible(!modalIsVisible);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Todo"
          color="#b180f0"
          onPress={toggleModalVisibility}
        />
        <TodoInput
          setTodos={setTodos}
          modalIsVisible={modalIsVisible}
          toggleModalVisibility={toggleModalVisibility}
        />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 16,
  },
});
