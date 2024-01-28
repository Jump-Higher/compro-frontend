import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-6xl text-red-500">Test Tailwind</h1>
      <p className=" text-red-500">Paragraf</p>
    </>
  );
}

export default App;
