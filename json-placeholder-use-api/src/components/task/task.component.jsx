import React from "react";
import "./task.styles.scss";

const Task = ({ task }) => {
  const { userId, id, title, completed } = task
  return (
    <section className="task-container">
      <article className='task-container-item'>
        <h3>{ title }</h3>
        <p>{ id }</p>
        <p>{ userId }</p>
        <p>{ completed }</p>
        <p>Ver Usuário</p>
      </article>
    </section>
  );
};

export default Task;