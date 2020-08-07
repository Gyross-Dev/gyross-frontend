import React, { Component } from "react";
import FormField from "../../../utils/form/Formfield";
import FormButton from "../../../utils/buttons/FormButtons";
import { update, isFormValid } from "../../../utils/form/FormActions";
import Dialog from "@material-ui/core/Dialog";

import "./Vendor.signup.page.scss";

class Signup extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      name: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "firstname_input",
          type: "text",
          label: "First Name",
          placeholder: "Enter your firstname",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      lastname: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "lastname_input",
          type: "text",
          label: "Last Name",
          placeholder: "Enter your lastname",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      email: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "email_input",
          type: "email",
          label: "Email",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "password_input",
          type: "password",
          label: "Password",
          placeholder: "Enter your password",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      confirmPassword: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "confirm_password_input",
          type: "password",
          label: "Confirm Password",
          placeholder: "Confirm your password",
        },
        validation: {
          required: true,
          confirm: "password",
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  };

  updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, "login");
    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    let formIsValid = isFormValid(this.state.formdata, "signup");

    if (formIsValid) {
      console.log("Signup Succeess");
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  render() {
    return (
      <div className="signup-vendor-container">
        <div className="container-fields">
          <h1 className="vendor-title">Vendor Login</h1>
          <form>
            <h2>Personal information</h2>
            <div className="form_items">
              <FormField
                id={"name"}
                formdata={this.state.formdata.name}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"lastname"}
                formdata={this.state.formdata.lastname}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={(element) => this.updateForm(element)}
              />
            </div>
            <h2>Verify password</h2>
            <div className="form_items">
              <FormField
                id={"password"}
                formdata={this.state.formdata.password}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"confirmPassword"}
                formdata={this.state.formdata.confirmPassword}
                change={(element) => this.updateForm(element)}
              />
            </div>
            <div>
              {this.state.formError ? (
                <div className="error_label">Please check your data</div>
              ) : null}
              <FormButton onClick={(event) => this.submitForm(event)}>
                Create an account
              </FormButton>
            </div>
          </form>
        </div>

        <Dialog open={this.state.formSuccess}>
          <div className="dialog_alert">
            <div>Congratulations !!</div>
            <div>
              You will be redirected to the LOGIN in a couple seconds...
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Signup;
