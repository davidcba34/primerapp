import React,{useEffect, useState} from "react";
import velas from './Data/data'
import { ItemList } from "./ItemList";


const ItemListContainer = ({greetings}) =>{
    
    const [productos, setProductos] = useState ([])
    
    const getProductos = () =>{
      return new Promise ((resolve, reject) =>{
        setTimeout(() => {
          resolve(velas)
          
        }, 2000);
      }
      )
    
    }
    useEffect(()=> {
      getProductos()
      .then(res =>setProductos(res))
      .catch(err =>console.log(err))
    },[] )
    

  
     console.log (productos)
 
      

    return (

      <>
       <h1>{greetings}</h1>
       <hr/>
      <ItemList ListadoProductos={productos}/>
      </>
    )



}
export default ItemListContainer;