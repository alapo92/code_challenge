import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import Card from "../UI/Card";
import UncheckedTasks from "./UncheckedTasks";
import classes from "./ManageTasks.module.css";

function ManageTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTasks = [task, ...tasks];

    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const newTasks = [...tasks].filter((todo) => todo.id !== id);

    setTasks(newTasks);
  };

  const updateTask = (taskId, newValue) => {
    if (newValue.length === 0) {
      return;
    }

    setTasks((prev) =>
      prev.map((item) => (item.id === taskId ? newValue : item))
    );
  };

  const checkTask = (id) => {
    let updatedTask = tasks.map((task) => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
      return task;
    });
    setTasks(updatedTask);
  };

  return (
    <div className={classes.main}>
      <Card className={classes.tasks}>
        <h2>Manage Tasks</h2>
        <TaskForm onAddTask={addTask} />
        <Task
          tasks={tasks}
          removeTask={removeTask}
          updateTask={updateTask}
          checkTask={checkTask}
        />
      </Card>
      <UncheckedTasks tasks={tasks} />
    </div>
  );
}

export default ManageTasks;
