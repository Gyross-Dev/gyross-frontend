import React from "react";
import "../Menu-form.style.scss";

const MenuCategory = ({ handleInputChange, removeField, item, items }) => {
  return items.map((val, idx) => {
    return (
      <div className="input-container" key={idx}>
        <div className="input-item">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={items[idx].name}
            onChange={(e) => handleInputChange(e, item, idx)}
          />
        </div>
        <div className="input-item">
          <label htmlFor="price">price</label>
          <input
            type="text"
            name="price"
            value={items[idx].price}
            onChange={(e) => handleInputChange(e, item, idx)}
          />
        </div>
        <div className="btn-box">
          {idx > 0 ? (
            <button
              className="btn-submit"
              onClick={(e) => removeField(item, idx, e)}
            >
              remove this field
            </button>
          ) : null}
        </div>
      </div>
    );
  });
};
export default MenuCategory;
