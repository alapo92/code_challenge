import React from "react";
import Card from "../UI/Card";
import classes from "./UncheckedTasks.module.css";

const UncheckedTasks = ({ tasks }) => {
  return (
    <Card className={classes.tasks}>
      <h2>Unfinished Tasks</h2>
      <ul>
        {tasks
          .filter((task) => !task.isChecked)
          .map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
      </ul>
    </Card>
  );
};

export default UncheckedTasks;
