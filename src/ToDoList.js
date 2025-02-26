import React, { useState } from 'react';
import "./styles.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, isDone: false }]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center" id='Highlight1'>To-Do List</h1>

      <center>
      <div className="input-group mb-3">
        <input
          type="text"
          id="taskInput"
          className="form-control"
          placeholder="Add a new task"
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTask(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <button
          className="btn btn-primary" id="AddBtn"
          onClick={() => {
            const input = document.getElementById('taskInput');
            addTask(input.value);
            input.value = "";
          }}
        >
          Add Task
        </button>
      </div>
      </center>
      <br></br>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.isDone ? "list-group-item-success" : ""
            }`}
          >
            <span>{task.text}</span>
            <button id="AlignButton"
                className="btn btn-sm btn-danger"
                onClick={() => removeTask(index)}
              >
                Delete
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
