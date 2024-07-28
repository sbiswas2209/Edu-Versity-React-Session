import { useState } from "react";
import Todo from "../types/Todo";
import TodoTile from "../components/TodoTile";

function Home() {
  const [todoText, setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo() {
    const todo: Todo = {
      id: Date.now(),
      title: todoText,
      completed: false,
    };

    const updatedTodos = todos.concat(todo);

    setTodos(updatedTodos);
  }

  function onCompleted(id: number) {
    const updatedTodos = todos.map((e) => {
      if (e.id === id) {
        return { ...e, completed: true };
      }
      return e;
    });

    setTodos(updatedTodos);
  }

  function onDelete(id: number) {
    const updatedTodos = todos.filter((e) => {
      return e.id !== id;
    });

    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {todos.map((e) => {
          return (
            <TodoTile
              key={e.id}
              todo={e}
              onCompleted={onCompleted}
              onDelete={onDelete}
            />
          );
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your todo here"
          value={todoText}
          onChange={(e) => {
            e.preventDefault();
            setTodoText(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;
