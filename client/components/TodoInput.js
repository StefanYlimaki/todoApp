import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const TodoInput = ({ setTodos, modalIsVisible, toggleModalVisibility }) => {
  const [todo, setTodo] = useState("");

  function todoInputHandler(enteredText) {
    setTodo(enteredText);
  }

  function addTodoHandler() {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: todo, id: Math.random().toString() },
    ]);
    setTodo("");
    toggleModalVisibility();
  }

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="type your todo in here"
          onChangeText={todoInputHandler}
          value={todo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={toggleModalVisibility}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Todo" onPress={addTodoHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 12,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 120,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default TodoInput;
