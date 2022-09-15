import "./styles.css";
import { useState } from "react";

export default function App() {
  let [name, setName] = useState("oFear");

const changeName=()=>{
  setName("Broder")
}
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={changeName}>change name</button>
    </div>
  );
}
