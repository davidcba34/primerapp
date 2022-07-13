import { useState } from "react";
import hello from "./Hello.js";

function Contenedor (){
    const[name, setName] = useState()
    return (
        <>
        
         <hello name ={name}></hello>
         <button onClick={() => setName("mundo")}>Click me!</button>
         
         </>
    )

}

export default Contenedor;