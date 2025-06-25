import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodosWrapper() {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), title, completed: false }]);

    return true;
  };
  const deleteTodo = (id: string) => {};
  const toggleCompleted = (id: string) => {};
  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      {/* Add New Todo Form */}

      <TodoForm addTodo={addTodo} />

      {/* display todos */}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}

export default TodosWrapper;
