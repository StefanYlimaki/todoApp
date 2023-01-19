import { View, Text, StyleSheet, Pressable } from "react-native";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteTodo.bind(this, todo.item.id)}
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
