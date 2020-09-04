import React from "react";
import CategoryInput from "./utils/Menu-category";
import "./Menu-form.style.scss";

class MenuForm extends React.Component {
  state = {
    menu: {
      Breakfast: [{ name: "", price: "" }],
      Lunch: [{ name: "", price: "" }],
      Dinner: [{ name: "", price: "" }],
      Soda: [{ name: "", price: "" }],
    },
    category: "",
  };

  addNewField = (e, item) => {
    e.preventDefault();
    let newField = { name: "", price: "" };
    this.setState({
      menu: { ...this.state.menu, ...this.state.menu[item].push(newField) },
    });
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
    let menu = this.state.menu;
    this.setState({ ...this.state.menu, ...(menu[item][index][name] = value) });
  };

  render() {
    let { menu } = this.state;
    console.log(this.state.menu);
    return (
      <>
        {menu
          ? Object.keys(menu).map((item, index) => {
              return (
                <div className="update-container" key={index}>
                  <form className="form-container" onSubmit={this.handleSubmit}>
                    <div className="input-container">
                      <div className="input-item category">
                        <label className="category-title" htmlFor="name">
                          {item}
                        </label>
                        {/* <input
                          type="text"
                          name="category"
                          value={category}
                          onChange={this.handleInputChange}
                        /> */}
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
        <div className="btn-box">
          <button className="btn-submit" type="submit">
            Submit | Update
          </button>
        </div>
      </>
    );
  }
}
export default MenuForm;
