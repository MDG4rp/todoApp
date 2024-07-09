import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add } from "../redux/toDoSlice";
import TodoList from "./TodoList";

export default function Todo() {
  const [newtodo, setNewtodo] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = (text) => {
    dispatch(add(text));
  };
  const handleAddTodoClick = () => {
    if (newtodo.trim() !== "") {
      handleAddTodo(newtodo.trim());
      setNewtodo("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodoClick();
    }
  };
  return (
    <>
      <div className="max-w-4xl mx-auto sm:mt-8 p-6 bg-gray-100 rounded-xl">
        <h2 className="text-2xl font-bold text-center uppercase mt-3 mb-3">
          To do List
        </h2>

        <div className=" flex items-center mb-4">
          <input
            type="text"
            name="addTodoInput"
            id="addTodoInput"
            value={newtodo}
            onChange={(e) => setNewtodo(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add Todo"
            className=" flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-xl"
          />
          <button
            className=" ml-4 p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 focus:outline-none"
            onClick={handleAddTodoClick}
          >
            <FaPlus />
          </button>
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </>
  );
}
