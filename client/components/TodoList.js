import { View, FlatList, Text, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <View style={styles.todosContainer}>
      <FlatList
        data={todos}
        renderItem={(todo) => {
          return <TodoItem todo={todo} deleteTodo={deleteTodo} />;
        }}
        keyExtractor={(todo, index) => {
          return todo._id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todosContainer: {
    marginTop: 64,
    flex: 6,
  },
});

export default TodoList;
