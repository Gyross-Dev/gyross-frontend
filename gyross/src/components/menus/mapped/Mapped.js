import React from "react";
import "../Menu.style.scss";

export const MapMenu = ({ val, menu }) => {
  return (
    <div className="category-container">
      <div className="category-title">{menu}</div>
      <div className="category-card">
        {val.map((item, index) => {
          return (
            <div className="category-items" key={index}>
              <div className="item">{item["name"]}</div>
              <div className="price">$ {item["price"]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MapSauce = ({ menu, val }) => {
  return (
    <div className="category-container">
      <div className="category-title">{menu}</div>
      <div className="category-card">
        {val.map((sauce, i) => {
          return (
            <div className="category-items" key={i}>
              <div className="item">{sauce}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
