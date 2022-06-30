import React from 'react'

export const ItemList = ({ListadoProductos}) =>{
 
    console.log('ListadoProductos', ListadoProductos)

    return(
        <div className='container'>
            <div className='row justify-content-evely'>
                {ListadoProductos.map((unProducto)=> <h1>{unProducto.name}</h1>)}
            </div>
        </div>
    )
}