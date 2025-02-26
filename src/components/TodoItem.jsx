function TodoItem({ todoName, todoDate, onDelete }) {
  return (
    <div className="flex flex-row items-center justify-between bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4 mb-4">
      <div className="flex-1 flex-wrap  md:w-1/2 text-gray-800 dark:text-gray-100 font-medium ">
        {todoName}
      </div>
      <div className="flex-1  md:w-1/3 text-gray-600 dark:text-gray-300 font-medium text-center">
        {todoDate}
      </div>
      <div className="mt-2 md:mt-0 ">
        <button
          type="button"
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
