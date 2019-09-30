import React from "react";
import './Registration.css';
function Registration() {
  return (
    <section>
      <form>
        <div className="form-element">
          <label for="name">Name</label>
          <input type="text" name="name" id="name"></input>
        </div>
        <div className="form-element">
            <label for="shift">Choose your shift</label>
            <select id="shift">
                <option value="">Please choose your shift</option>
                <option value="A">Shift A (8:00 - 16:00)</option>
                <option value="B">Shift B (9:00 - 17:00)</option>
                <option value="C">Shift C (10:00 - 18:00)</option>
            </select>
        </div>
      </form>
    </section>
  );
}

export default Registration;
