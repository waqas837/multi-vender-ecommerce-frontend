import React from "react";
import Navbar from "./Navbar";
import Services from "./Services";
import Cards from "./Cards";
import Newsection from "./Newsection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <Cards />
      <Newsection />
      <Footer />
    </div>
  );
};

export default Home;
