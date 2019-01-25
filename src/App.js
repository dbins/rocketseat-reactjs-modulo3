import React from "react";
import { Provider } from "react-redux";
import "./App.css";
//Importante: Importar o Reactotron antes do store!
import "./config/reactotron";
import store from "./store";
import TodoList from "./Todolist";
const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
