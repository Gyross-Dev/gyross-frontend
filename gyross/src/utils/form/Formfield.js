import React from "react";
import "./FormField.scss";
const Formfield = ({ formdata, change, id }) => {
  const showError = () => {
    let errorMessage = null;

    if (formdata.validation && !formdata.valid) {
      errorMessage = (
        <div className="error_label">{formdata.validationMessage}</div>
      );
    }

    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;

    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div className="form-group">
            {formdata.showlabel ? (
              <div
                className={`${
                  formdata.value.length ? "shrink" : ""
                } form-input-label `}
              >
                {formdata.config.label}
              </div>
            ) : null}

            <input
              className="form-input"
              {...formdata.config}
              value={formdata.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
            />
            {showError()}
          </div>
        );
        break;
      case "select":
        formTemplate = (
          <div className="form-group">
            {formdata.showlabel ? (
              <div
                className={`${
                  formdata.value.length ? "shrink pass" : ""
                } form-input-label `}
              >
                {formdata.config.label}
              </div>
            ) : null}
            <select
              value={formdata.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
            >
              <option value="">Select one</option>
              {formdata.config.options.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            {showError()}
          </div>
        );
        break;
      case "textarea":
        formTemplate = (
          <div className="form-group">
            {formdata.showlabel ? (
              <div
                className={`${
                  formdata.value.length ? "shrink pass" : ""
                } form-input-label `}
              >
                {formdata.config.label}
              </div>
            ) : null}
            <textarea
              {...formdata.config}
              value={formdata.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
            />
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

export default Formfield;
