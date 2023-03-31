import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Product></Product>
    </div>
  );
}

export default HomePage;
