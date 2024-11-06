import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
