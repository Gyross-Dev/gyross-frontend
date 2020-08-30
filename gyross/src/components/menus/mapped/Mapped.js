import React from "react";
import "../Menu.style.scss";

const Mapped = ({ val, item }) => {
  return (
    <div className="item-container">
      {val
        ? Object.entries(val).map(([key, val], index) => {
            return (
              <div className="item" key={index}>
                <span>{key}</span>
                <MapChild val={val} item={key} />
              </div>
            );
          })
        : null}
    </div>
  );
};
// line 7 && item !== "sauce"
const MapChild = ({ val }) => {
  return (
    <div>
      {val
        ? Object.entries(val).map(([key, val], index) => {
            return (
              <div className="price" key={(index, key)}>
                <span>$ {val}</span>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Mapped;
