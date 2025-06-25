import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TTodoProps = {
  todo: TTodo;
  deleteTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
};

function Todo({ deleteTodo, todo, toggleCompleted }: TTodoProps) {
  return (
    <div className="Todo">
      <p
        className={`${todo.completed ? "completed" : ""}`} // or completed className
      >
        {todo.title}
      </p>

      <div>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default Todo;
