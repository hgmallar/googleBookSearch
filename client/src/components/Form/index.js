import React from "react";
import "./style.css";

function Form(props) {
  return (
    <section className="mx-auto">
      <form className="search">
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
          <button type="submit" onClick={props.action} className="btn btn-danger mt-2 float-right">
            Search
        </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
