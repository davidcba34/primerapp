import React,{useEffect, useState} from "react";
import {listadoProductos} from './data.json'
import { ItemList } from "./ItemList";


const ItemListContainer = ({greetings}) =>{
    
    const [productos, setProductos] = useState ([])
    
    const getProductos = () =>{
      return new Promise (({resolve, reject}) =>{
        setTimeOut(() =>{
          listadoProductos.length>0?
          resolve(listadoProductos):  
          reject ("no hay datos")
        }, 2000);
      }
      )
    
    }
    useEffect(()=> {
      getProductos()
      .then(res =>setProductos(res))
      .catch(err =>console.log(err))
    },[] )
      
    
      //useEffect(()=> {
        //fetch('./data/data.json')
        //.then(res =>res.json())
        //.then(data => setProductosFetch(data))
        //.catch(err =>console.log(err))
      //},[] )
        //console.log("productos:",productos)
        //console.log("productosFetch:",productosFetch)
      
      
    return (

      <>
       <h1>{greetings}</h1>
       <hr/>
      <ItemList ListadoProductos={productos}/>
      </>
    )



}
export default ItemListContainer;