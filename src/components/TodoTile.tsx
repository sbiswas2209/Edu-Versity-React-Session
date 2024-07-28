import Todo from "../types/Todo";

interface TodoTileProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onCompleted: (id: number) => void;
}

const TodoTile: React.FC<TodoTileProps> = ({ todo, onDelete, onCompleted }) => {
  return (
    <div>
      <p>{todo.completed ? <s>{todo.title}</s> : <p>{todo.title}</p>}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          onDelete(todo.id);
        }}
      >
        Delete
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          onCompleted(todo.id);
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoTile;
