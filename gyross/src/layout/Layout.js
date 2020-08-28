import React from "react";
import "./Layout.scss";
import Header from "../components/header/Header.component";
import Footer from "../components/footer/Footer.component";

const Layout = (props) => {
  return (
    <div className="app-container">
      <div className="header-conatiner">
        <Header />
      </div>
      <div className="page_container">{props.children}</div>
      <div className="footer-conatiner">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
