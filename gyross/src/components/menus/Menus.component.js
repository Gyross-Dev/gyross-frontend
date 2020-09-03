import React, { Component } from "react";
import { MapMenu, MapSauce } from "./mapped/Mapped";
import { connect } from "react-redux";
import { getMenus } from "../../redux/actions/vendor/Profile.vendor.action";

class Menus extends Component {
  state = {
    breakfast: null,
    dinner: null,
    lunch: null,
    soda: null,
    sauce: null,
  };
  componentDidMount() {
    this.setState({ menu: this.props.menu });
    const id = this.props.match.params.id;
    this.props.getMenus(id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.menu !== this.props.menu) {
      let { breakfast, dinner, lunch, soda, sauce } = this.props.menu;
      this.setState({
        breakfast,
        lunch,
        dinner,
        soda,
        sauce,
      });
    }
  }

  render() {
    let { breakfast, dinner, lunch, soda, sauce } = this.state;
    return (
      <div className="menu-container">
        <div className="menu-wrapper">
          <h1 className="menu-title">Menu</h1>
          <div className="category">
            {breakfast ? <MapMenu menu="breakfast" val={breakfast} /> : null}
          </div>

          <div className="category">
            {lunch ? <MapMenu menu="lunch" val={lunch} /> : null}
          </div>

          <div className="category">
            {dinner ? <MapMenu menu="dinner" val={dinner} /> : null}
          </div>

          <div className="category">
            {soda ? <MapMenu menu="soda" val={soda} /> : null}
          </div>

          <div className="category">
            {sauce ? <MapSauce menu="sauce" val={sauce} /> : null}
          </div>
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
