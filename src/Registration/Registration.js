import React, { useState } from "react";
import "./Registration.css";
function Registration() {
  const [name, setName] = useState("");
  const [shift, setShift] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleShiftChange(event) {
    setShift(event.target.value);
  }
  return (
    <section>
      <form>
        <div className="form-element">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="form-element">
          <label for="shift">Choose your shift</label>
          <select id="shift" onChange={handleShiftChange}>
            <option value="">Please choose your shift</option>
            <option value="A">Shift A (8:00 - 16:00)</option>
            <option value="B">Shift B (9:00 - 17:00)</option>
            <option value="C">Shift C (10:00 - 18:00)</option>
          </select>
        </div>
      </form>

      {name.length < 5 ? <b className="error-message">too short</b> : null}
      {name.length > 5 ? <button>Continue</button> : null}
      {/* <b>your name is:{name}</b>
      <b>your shift is:{shift}</b> */}
    </section>
  );
}

export default Registration;
