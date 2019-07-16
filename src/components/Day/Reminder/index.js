import React from "react";
import "./index.css";

const reminder = props => (
  <article className="reminder" style={{ background: props.reminder.color }}>
    <div className="tools">
      <button onClick={() => props.handleDeleteReminder(props.reminder.id)}>
        <i className="fas fa-trash-alt" />
      </button>
      <button onClick={() => props.handleSetEdit(props.reminder)}>
        <i className="fas fa-edit" />
      </button>
    </div>
    <strong>{props.reminder.description}</strong>
    <strong>{props.reminder.state}</strong>
    <strong>{props.reminder.temperature}°F</strong>
    <time>{props.reminder.time}</time>
  </article>
);

export default reminder;
