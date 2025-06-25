import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TTodoProps = {
  todo: TTodo;
  deleteTodo: (id: string) => boolean;
  toggleCompleted: (id: string) => boolean;
};

function Todo({ deleteTodo, todo, toggleCompleted }: TTodoProps) {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleCompleted(todo.id)}
        className={`${todo.completed ? "completed" : ""}`}
      >
        {todo.title}
      </p>

      <div>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
}

export default Todo;
