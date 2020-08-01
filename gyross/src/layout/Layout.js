import React from "react";
import "./Layout.scss";
import Header from "../components/header/Header.component";
import Footer from "../components/footer/Footer.component";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
