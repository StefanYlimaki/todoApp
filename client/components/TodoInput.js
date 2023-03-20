import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "@env";

const TodoInput = ({ todoType }) => {
  const [todo, setTodo] = useState("");

  function todoChangeTextHandler(enteredText) {
    setTodo(enteredText);
  }

  function addTodoHandler() {
    axios.post(`${baseUrl}/api/todos`, {
      text: todo,
      todoType: todoType
    });
    setTodo("");
  }

  return (
    <View style={styles.todoInputContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={todoChangeTextHandler}  
          value={todo}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => addTodoHandler() }>
          <Text>Lisää</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
};

const styles = StyleSheet.create({
  todoInputContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  textInputContainer: {
    width: "85%"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 12,
    padding: 16,
    marginRight: 8,
    marginLeft: 8,
    marginTop: 8,
    height: 60
  },
  button: {
    marginTop: 8,
    height: 60,
    width: 55,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  }
});

export default TodoInput;
