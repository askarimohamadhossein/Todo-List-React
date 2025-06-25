import React from "react";

import "./App.css";

function App() {
  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      {/* Add New Todo Form */}

      <form className="TodoForm">
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>

      {/* display todos */}
      <div className="Todo">
        <p
          className="" // or completed className
        >
          Test Todo Title :))
        </p>
        <div>{/* <FontAwesomeIcon icon={faTrash} /> */}</div>
      </div>
    </div>
  );
}

export default App;
