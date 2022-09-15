import "./styles.css";
import { useState } from "react";
export default function App() {
  let [name, setName] = useState("oFear");

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={() => setName("bruv")}>change name</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
