import { useDispatch, useSelector } from "react-redux";
import {
  remove,
  toggle,
  markAllAsRead,
  markAllUnread,
  toggleImportant,
} from "../redux/toDoSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

export default function TodoList() {
  const todos = useSelector((state) => state.toDo.value);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(remove({ id }));
  };

  const handleToggleRead = (id) => {
    dispatch(toggle({ id }));
  };

  const handleMarkAllAsRead = () => {
    dispatch(markAllAsRead());
  };

  const handleMarkAllUnread = () => {
    dispatch(markAllUnread());
  };

  const handleToggleImportant = (id) => {
    dispatch(toggleImportant({ id }));
  };

  const sortedTodos = [...todos].sort((a, b) => b.important - a.important);

  return (
    <div>
      {todos.length > 1 && (
        <div className="mb-4">
          <button
            onClick={handleMarkAllAsRead}
            className="p-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-700 focus:outline-none mr-2"
          >
            Mark All as Read
          </button>
          <button
            onClick={handleMarkAllUnread}
            className="p-2 bg-red-500 text-white rounded-md shadow-lg hover:bg-red-700 focus:outline-none"
          >
            Mark All as Unread
          </button>
        </div>
      )}
      <ul className="space-y-2">
        <li className="my-2 text-lg italic">TASKS</li>
        {sortedTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 bg-gray-200 rounded-md shadow-lg"
          >
            <span
              className={`flex-1 text-left ${todo.read ? "line-through" : ""}`}
            >
              {todo.text}
            </span>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.important}
                onChange={() => handleToggleImportant(todo.id)}
                className="mr-4"
              />
              <button
                onClick={() => handleToggleRead(todo.id)}
                className="mr-4 text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                {todo.read ? (
                  <BsToggleOn size={25} />
                ) : (
                  <BsToggleOff size={25} />
                )}
              </button>
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
              >
                <RiDeleteBin6Line size={25} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
