import { useState } from "react";

import "./App.css";
import { Hero } from "./Components/Hero";
import { Cards } from "./Components/Cards";
import { Galllary } from "./Components/Galllary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero></Hero>
      <Cards></Cards>
      <Galllary></Galllary>
    </>
  );
}

export default App;
