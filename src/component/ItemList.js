import React from 'react'
import { Item } from './Item'

export const ItemList = ({ListadoProductos}) =>{
 
    console.log('ListadoProductos', ListadoProductos)

    return(
        <div className='container'>
            <div className='row justify-content-evely'>
                {ListadoProductos.map((unProducto)=> < Item key={unProducto.id} name = {unProducto.name} image={unProducto.img} price={unProducto.price}/>)}
            </div>
        </div>
    )
}