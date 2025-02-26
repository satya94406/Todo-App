import { useDispatch } from "react-redux";
import { deleteTodo } from "../context/todoSlice";
import TodoItem from "./TodoItem";

function TodoItemShow({ TodoElements }) {
  const dispatch = useDispatch();

  return (
    <>
      {TodoElements.map((item) => (
        <TodoItem
          key={item.id}
          todoName={item.todoName}
          todoDate={item.todoDate} 
          onDelete={() => dispatch(deleteTodo(item.id))}
        />
      ))}
    </>
  );
}

export default TodoItemShow;
