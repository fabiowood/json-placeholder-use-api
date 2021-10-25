import React, { useState, useEffect } from "react";

import Collection from "../../components/collection/collection.component";

const Tasks = () => {
  const [tasks, setTasksList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((tasks) => setTasksList(tasks));
  }, []);

  return (
    <Collection key={tasks} collection={tasks} collectionItemType="task" />
  );
};

export default Tasks;
