import React from 'react'
import { View } from 'react-native'

import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const ShoppingListTab = ({ todos, setTodos, deleteTodo }) => {
  
  return(
    <View>
        <TodoInput
          setTodos={setTodos}
          todoType={'shoppingList'}
        />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
    </View>
  )
}

export default ShoppingListTab 