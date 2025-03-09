import { useState } from "react";

import "./App.css";
import { Hero } from "./Components/Hero";
import { Cards } from "./Components/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero></Hero>
      <Cards></Cards>
    </>
  );
}

export default App;
