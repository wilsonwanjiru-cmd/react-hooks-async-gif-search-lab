import React, { Component } from "react";

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Pass the query to the parent component (GifListContainer) via props.
    this.props.fetchGifs(this.state.query);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Enter a GIF search term"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
