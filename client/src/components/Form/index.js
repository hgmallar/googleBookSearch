import React from "react";
import "./style.css";

function Form(props) {
  return (
    <section>
      <form>
        <div className="form-group">
          <label htmlFor="book">Book</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="bookSearch"
            type="text"
            className="form-control"
            placeholder="Book Information"
          />
          <button type="submit" onClick={props.action} className="red">
            Search
        </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
