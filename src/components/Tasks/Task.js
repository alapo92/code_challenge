import React, { useState } from "react";
import TaskForm from "./TaskForm";
import classes from "./Task.module.css";

function Task({ tasks, removeTask, updateTask, checkTask }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    isChecked: false,
  });

  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TaskForm edit={edit} onAddTask={submitUpdate} />;
  }

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className={classes.task}>
          <div className={classes.task_text}>
            <input
              type="checkbox"
              onChange={() => checkTask(task.id)}
              checked={task.isChecked}
            />
            <span>{task.text}</span>
          </div>
          <div className={classes.buttons}>
            <button
              className={classes.button_edit}
              onClick={() => setEdit({ id: task.id, value: task.text })}
            >
              Edit
            </button>
            <button
              className={classes.button_delete}
              onClick={() => removeTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Task;
