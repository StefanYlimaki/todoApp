import React from 'react'
import { View } from 'react-native'

import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const UserOneTodosTab = ({ todos, setTodos, deleteTodo }) => {
  
  return(
    <View>
        <TodoInput
          setTodos={setTodos}
          todoType={'userOne'}
        />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
    </View>
  )
}

export default UserOneTodosTab