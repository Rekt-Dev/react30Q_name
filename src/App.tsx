import "../src/styles.css"
import { useState } from "react";
import Child from "./Child"



export default function App() {
  
const [name,setName]=useState("joey")
  

  return  <div>
    <Child valueOfProps={name}/>

  <div>
    sup, my name is {name}
    </div>
        <button onClick={()=>{setName("bleh")}}>change name</button>
        </div>


  
  
  
  }
