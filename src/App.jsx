import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-6xl text-hijau">Hijau Tua</h1>
      <h1 className="text-6xl text-hijau_muda">Hijau Muda</h1>
      <p className=" text-red2">merah</p>
      <p className=" text-pink">pink</p>
      <p className=" text-orange">orange</p>
      <p className=" text-secondary">secondary</p>
      <p className=" text-abu2">abu-abu</p>
      <p className=" text-ungu">ungu</p>
      <p className=" text-biru">biru</p>
      <p className=" text-kuning">kuning</p>
    </>
  );
}

export default App;
