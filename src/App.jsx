import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoItemShow from "./components/TodoItemShow";
import Header from "./components/Header";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="container">
      <Header/>
      <AddTodo />
      <TodoItemShow TodoElements={todos} />
    </div>
  );
}

export default App;
