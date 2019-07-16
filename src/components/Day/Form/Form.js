import React from "react";
import TimePicker from "rc-time-picker";
import ColorPicker from "rc-color-picker";
import moment from "moment";
import "rc-time-picker/assets/index.css";
import "rc-color-picker/assets/index.css";
import "./Form.css";

const reminderForm = props => {
  const time = props.reminder.time
    ? moment(props.reminder.time, "HH:mm a")
    : moment()
        .hour(0)
        .minute(0);

  return (
    <form
      method="post"
      onSubmit={e => props.handleCreateUpdateReminder(e, props.reminder)}
    >
      <textarea
        className="description"
        placeholder="Enter event description..."
        maxLength="30"
        defaultValue={props.reminder.description}
      />

      <select
        value={props.reminder.state || ""}
        onChange={props.handleEventState}
      >
        <option value="">City...</option>
        <option value="New York">New York</option>
        <option value="New Jersey">New Jersey</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Bogota">Bogota</option>
        <option value="London">London</option>
        <option value="Beijing">Beijing</option>
        <option value="Singapore">Singapore</option>
        <option value="Shanghai">Shanghai</option>
        <option value="Sydney">Sydney</option>
        <option value="Dubai">Dubai</option>
        <option value="Paris">Paris</option>
      </select>

      <label>Weather: </label>
      <label>{props.reminder.temperature}</label>
      <div>
        <TimePicker
          showSecond={false}
          defaultValue={time}
          format="h:mm a"
          use12Hours
          inputReadOnly
        />
      </div>

      <label>Reminder color:</label>
      <ColorPicker
        className="color-picker"
        animation="slide-up"
        color={props.reminder.color || props.defaultColor}
        onClose={props.handleSetColor}
      />

      <div className="buttons">
        <button className="btn-submit">Submit</button>

        <button
          className="btn-cancel"
          onClick={() => props.handleSetEditDay(null)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default reminderForm;
