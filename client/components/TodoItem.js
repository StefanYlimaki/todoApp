import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

const TodoItem = ({ todo, deleteTodo }) => {
  const handleClickOnTodo = () => {
    Alert.alert("Confirm deletion", "Do you really want to delete this todo?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteTodo(todo.item._id) },
    ]);
  };

  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={handleClickOnTodo}
        style={({ pressed }) => pressed && styles.pressedTodoItem}
      >
        <Text style={styles.todoItemText}>{todo.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    marginTop: 4,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
    borderColor: "#5e0acc",
  },
  pressedTodoItem: {
    opacity: 0.5,
  },
  todoItemText: {
    color: "white",
    padding: 10,
  },
});

export default TodoItem;
