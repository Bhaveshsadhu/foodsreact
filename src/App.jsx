import { useState } from "react";

import "./App.css";
import { Hero } from "./Components/Hero";
import { Cards } from "./Components/Cards";
import { Galllary } from "./Components/Galllary";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Cards></Cards>
      <Galllary></Galllary>
      <Footer></Footer>
    </>
  );
}

export default App;
