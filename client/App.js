
import axios from "axios"
import { useState, useEffect } from "react"
import { StatusBar, View, Text } from "react-native"
import { baseUrl } from "@env";

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import UserOneTodosTab from "./tabs/UserOneTodosTab"
import UserTwoTodosTab from "./tabs/UserTwoTodosTab"
import ShoppingListTab from "./tabs/ShoppingListTab"

const Tab = createMaterialTopTabNavigator()

const App = () => {
  const [todos, setTodos] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/todos`)
      .then((response) => response.data)
      .then((data) => {
        setTodos(data);
        setLoading(false)
      });
  }, [todos]);

  function deleteTodo(id) {
    console.log(id);
    axios.delete(`${baseUrl}/api/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
    });
  }

  if(loading){
    return(<View><Text>ladataan...</Text></View>)
  }

  let shoppingList = []
  let userOneTodos = []
  let userTwoTodos = []

  if(!loading){
    shoppingList = todos.filter((todo) => todo.todoType === 'shoppingList')
    userOneTodos = todos.filter((todo) => todo.todoType === 'userOne')
    userTwoTodos = todos.filter((todo) => todo.todoType === 'userTwo')
  }
  
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        initialRouteName={'Kauppalista'}
        screenOptions={{
          swipeEnabled: true,
            tabBarContentContainerStyle: {
              justifyContent: 'space-around'
            },
        }}
      >
        <Tab.Screen name="Kauppalista" children={props => <ShoppingListTab {...props} todos={shoppingList} setTodos={setTodos} deleteTodo={deleteTodo} /> }/>
        <Tab.Screen name="Käyttäjä 1" children={props => <UserOneTodosTab {...props} todos={userOneTodos} setTodos={setTodos} deleteTodo={deleteTodo} /> }/>
        <Tab.Screen name="Käyttäjä 2" children={props => <UserTwoTodosTab {...props} todos={userTwoTodos} setTodos={setTodos} deleteTodo={deleteTodo} /> }/>
      </Tab.Navigator>
     </NavigationContainer>
  );
}

export default App