import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For User by Last Name"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mr-2">
          Search
        </button>
        <button onClick={props.handleFormSort} className="btn btn-success">
          Sort by name
        </button>

      </div>
    </form>
  );
}

export default SearchForm;
