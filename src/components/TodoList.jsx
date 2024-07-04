import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/toDoSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function TodoList() {
  const todos = useSelector((state) => state.toDo.value);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(remove({ id }));
  };

  return (
    <ul className="space-y-2">
      <li className="my-2 text-lg italic">TASKS</li>
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-2 bg-gray-200 rounded-md shadow-lg"
        >
          <span className="flex-1 text-left">{todo}</span>
          <button
            onClick={() => handleRemoveTodo(index)}
            className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
          >
            <RiDeleteBin6Line size={25} />
          </button>
        </li>
      ))}
    </ul>
  );
}
