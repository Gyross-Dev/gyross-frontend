import React from "react";
import "./Layout.scss";
import Header from "../components/header/Header.component";
import Container from "./container/Container";
import Footer from "../components/footer/Footer.component";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default Layout;
