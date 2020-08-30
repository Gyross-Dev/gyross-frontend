import React, { Component } from "react";
import Mapped from "./mapped/Mapped";
import { connect } from "react-redux";
import { getMenus } from "../../redux/actions/vendor/Profile.vendor.action";

class Menus extends Component {
  state = {
    menu: null,
  };
  componentDidMount() {
    this.setState({ menu: this.props.menu });
    const id = this.props.match.params.id;
    this.props.getMenus(id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.menu !== this.props.menu) {
      this.setState({ menu: this.props.menu });
    }
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-wrapper">
          <h1 className="menu-title">Menu</h1>
          {this.state.menu
            ? Object.entries(this.state.menu).map(([key, val], index) => {
                return (
                  <div className="menu-box" key={index}>
                    <div className="menu-category">{key}</div>
                    <Mapped item={key} val={val} />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMenus: (id) => dispatch(getMenus(id)),
});
const mapStateToProps = (state) => ({
  menu: state.vendorProfile.menu,
});
export default connect(mapStateToProps, mapDispatchToProps)(Menus);
