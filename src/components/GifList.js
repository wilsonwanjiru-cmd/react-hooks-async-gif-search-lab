import React from "react";

const GifList = (props) => {
  const gifItems = props.gifs.map((gif) => (
    <li key={gif.id}>
      <img src={gif.images.original.url} alt={gif.title} />
    </li>
  ));

  return (
    <div>
      <ul>{gifItems}</ul>
    </div>
  );
};

export default GifList;
