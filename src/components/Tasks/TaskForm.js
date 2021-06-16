import React, { useState, useEffect, useRef } from "react";
import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState(
    props.edit ? props.edit.value : ""
  );

  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  });

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (enteredTask.trim().length === 0) {
      return;
    }
    props.onAddTask({
      text: enteredTask,
      id: Math.random().toString(),
      isChecked: false,
    });
    setEnteredTask("");
  };

  const taskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  const newTask = (
    <>
      {" "}
      <input
        id="new_task"
        type="text"
        placeholder="Add task"
        onChange={taskChangeHandler}
        value={enteredTask}
        ref={focusRef}
        maxLength="50"
      />
      <button type="submit" className={classes.button_add}>
        Add Task
      </button>
    </>
  );

  const editedTask = (
    <>
      {" "}
      <input
        id="edit_task"
        type="text"
        placeholder="Edit task"
        onChange={taskChangeHandler}
        value={enteredTask}
        ref={focusRef}
        maxLength="50"
      />
      <button type="submit" className={classes.button_edit}>
        Edit Task
      </button>
    </>
  );

  return (
    <form className={classes.form} onSubmit={addTaskHandler}>
      {props.edit ? editedTask : newTask}
    </form>
  );
};

export default TaskForm;
