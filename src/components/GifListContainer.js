import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    // Fetch initial data when the component mounts.
    this.fetchGifs("dolphin"); // You can set a default search term here.
  }

  fetchGifs = (query) => {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

// Access the API key from environment variables.
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Extract the first 3 gifs from the response.
        const gifs = data.data.slice(0, 3);
        this.setState({ gifs });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;

