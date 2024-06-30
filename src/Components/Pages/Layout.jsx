import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "85vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
