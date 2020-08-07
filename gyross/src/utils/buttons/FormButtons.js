import React from "react";

import "./FormButton.style.scss";

const FormButton = ({ children, inverted, ...allprops }) => (
  <button
    className={`${inverted ? "inverted" : ""}  custom-button`}
    {...allprops}
  >
    {children}
  </button>
);

export default FormButton;
