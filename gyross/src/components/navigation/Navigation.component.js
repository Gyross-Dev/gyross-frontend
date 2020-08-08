import React from "react";
import "./Navigation.component.scss";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  state = {
    showMenu: false,
  };
  showMenu = (e) => {
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };
  closeMenu = (event) => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  };
  render() {
    return (
      <div className="navigation-container">
        <nav>
          <div className="nav-item">
            <Link to="/">Home </Link>
          </div>
          <div className="nav-item">
            <Link to="/About">About </Link>
          </div>
          <div className="nav-item dropdown">
            <div></div>
            <Link id="dropdown-home" to="/">
              Profile
            </Link>

            <div className="dropdown-content" to="/login">
              <Link className="dropdown-item" to="/vendor-login">
                Vendor
              </Link>
              <Link className="dropdown-item" to="/vendor-login">
                Buyer
              </Link>
            </div>
          </div>
          <div className="nav-item dropdown">
            <Link id="dropdown-home" to="/">
              Signup
            </Link>

            <div className="dropdown-content" to="/login">
              <Link className="dropdown-item" to="/vendor-signup">
                vendor
              </Link>
              <Link className="dropdown-item" to="/vendor-signup">
                Buyer
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
