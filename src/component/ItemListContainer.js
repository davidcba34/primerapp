import React,{useEffect, useState} from "react";
import {ListaProductos} from './data.json'


const ItemListContainer = ({greetings}) =>{
    
    const [productos, setProductos] = useState ([])
    const getProductos = () =>{
      return new Promise (({resolve, reject}) =>{
        sesetTimeOut(() =>{
          listadoProductos.length>0?
          resolve{listadoProductos}
          reject ("no hay datos")
        }, 2000);
      }
      )
      (listadoProductos)

    }






}