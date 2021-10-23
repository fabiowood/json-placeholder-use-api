import React, { useState, useEffect } from "react";
import "./tasks.styles.scss";

import Task from "../../components/task/task.component";

const Tasks = () => {
  const [tasks, setTasksList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((tasks) => setTasksList(tasks));
  });

  return (
    <section className="tasks">
      <div>Tasks List</div>
      <div>
        {
          tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))
        }
      </div>
    </section>
  );
};

export default Tasks;
