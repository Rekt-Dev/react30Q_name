import "./styles.css";
import { useState } from "react";
import Child from "./Child"
export default function App() {
  const [name, setName] = useState("0Fear");


  return (
    <div className="App">
      <Child />
      <h1>{name}</h1>
      <button onClick={()=>setName("lul")}>change name</button>
    </div>
  );
}
