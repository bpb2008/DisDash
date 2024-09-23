import React from "react";
import NavBar from "./NavBar";
import Home from "../components/homepage/Home";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default Index;