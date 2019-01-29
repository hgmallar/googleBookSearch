import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  state = {
    search: "",
    books: [],
    error: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //API.getDogsOfBreed(this.state.search)
    //  .then(res => {
    //    if (res.data.status === "error") {
    //      throw new Error(res.data.message);
    //    }
    //    this.setState({ results: res.data.message, error: "" });
    //  })
    //  .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <section className="mx-auto">
        <form className="search">
          <div className="form-group">
            <label htmlFor="book">Book</label>
            <input
              value=""
              onChange={this.handleInputChange}
              name="bookSearch"
              type="text"
              className="form-control"
              placeholder="Book Information"
            />
            <button type="submit" onClick={this.handleFormSubmit} className="btn btn-danger mt-2 float-right">
              Search
        </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Form;
