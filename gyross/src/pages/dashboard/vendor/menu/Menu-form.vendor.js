import React from "react";
import CategoryInput from "./utils/Menu-category";
import "./Menu-form.style.scss";
import { connect } from "react-redux";
class MenuForm extends React.Component {
  state = {
    menu: {},
    category: "",
    error: "",
  };
  componentDidMount() {
    if (this.props.menu) {
      this.setState({ menu: this.props.menu });
    }
  }

  addNewField = (e, item) => {
    e.preventDefault();
    let newField = { name: "", price: "" };
    this.setState({
      menu: { ...this.state.menu, ...this.state.menu[item].push(newField) },
    });
  };

  addNewSection = (e) => {
    e.preventDefault();
    let newSection = {};
    if (this.state.category.length > 3) {
      newSection[this.state.category] = [{ name: "", price: "" }];
      this.setState({
        menu: { ...this.state.menu, ...newSection },
        category: "",
        error: "",
      });
    } else {
      this.setState({ error: "Please Give Section a Name" });
    }
  };

  removeField = (item, index, e) => {
    e.preventDefault();
    let menu = this.state.menu;
    menu[item].splice(index, 1);
    this.setState({
      menu,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleInputChange = (e, item, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "category") {
      this.setState({ ...this.state.category, category: value });
    } else {
      let menu = this.state.menu;
      this.setState({
        ...this.state.menu,
        ...(menu[item][index][name] = value),
      });
    }
  };

  render() {
    let { menu, category } = this.state;
    return (
      <>
        {menu
          ? Object.keys(menu).map((item, index) => {
              return (
                <div className="update-container" key={index}>
                  <form className="form-container" onSubmit={this.handleSubmit}>
                    <div className="input-container">
                      <div className="input-item category">
                        <div className="category-title" htmlFor="name">
                          {item}
                        </div>
                      </div>
                    </div>
                    <div>
                      <CategoryInput
                        item={item}
                        items={menu[item]}
                        handleInputChange={this.handleInputChange}
                        removeField={this.removeField}
                      />
                    </div>
                    <div className="btn-box">
                      <button
                        className="btn-submit"
                        onClick={(e) => this.addNewField(e, item)}
                      >
                        Add new field
                      </button>
                    </div>
                  </form>
                </div>
              );
            })
          : null}

        <form className="form-container" onSubmit={this.addNewSection}>
          <div className="input-container section">
            <div className="input-item">
              <label htmlFor="name">New Section</label>
              <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => this.handleInputChange(e)}
              />
            </div>
            <div className="input-item">
              {this.state.error ? (
                <div className="error-msg">{this.state.error} </div>
              ) : null}
            </div>
          </div>

          <div className="btn-box">
            <button className="btn-submit" type="submit">
              add a new section
            </button>
          </div>
        </form>

        <div className="btn-box">
          <button className="btn-submit" type="submit">
            Submit | Update
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.vendorProfile.data.menu,
});

export default connect(mapStateToProps)(MenuForm);
