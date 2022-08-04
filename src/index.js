import React from "react";
import ReactDOM from "react-dom";

const imageSrc = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img src={imageSrc} />
    </div>
  </div>,
  document.getElementById("root")
);
