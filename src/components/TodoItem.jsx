function TodoItem({ todoName, todoDate, onDelete }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4 mb-4">
      <div className="w-full md:w-1/2 text-gray-900 dark:text-white font-medium break-words whitespace-normal">
        {todoName}
      </div>

      <div className="w-full md:w-1/3 text-gray-700 dark:text-gray-300 font-medium text-center mt-2 md:mt-0">
        {todoDate}
      </div>

      <div className="w-full md:w-auto mt-2 md:mt-0">
        <button
          type="button"
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 w-full md:w-auto"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
