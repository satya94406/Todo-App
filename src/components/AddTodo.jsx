import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../context/todoSlice";

function AddTodo() {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoName && todoDate) {
      dispatch(addTodo({ id: Date.now(), todoName, todoDate }));
      setTodoName("");
      setTodoDate("");
    }
  };

  return (
    <div className="bg-white  dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
        <b className="block text-gray-700 dark:text-gray-300 mb-2">Todo Task</b>        
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors flex-wrap"
          />
        </div>

        <div className="w-full md:w-1/3">
        <b className="block text-gray-700 dark:text-gray-300 mb-2">Due Date</b>          
          <input
              id="todoDate"
              type="date"
              value={todoDate}
              onChange={(e) => setTodoDate(e.target.value)} 
              onFocus={(e) => e.target.showPicker()} 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            />
        </div>

        <div className="w-full md:w-1/3 mt-4">
          <button
            type="button"
            onClick={handleAddTodo}
            className="w-full  bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-200"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
