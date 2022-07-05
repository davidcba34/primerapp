import React,{ useState} from "react";
import {ItemDetail} from './ItemDetail'



const ItemDetailContainer = ({greetings}) =>{
    
    const [productosFetch, setProductosFetch] = useState ([])
    
    const fetch = () =>{
      fetch('./data.json')
      .then((Response) =>{return Response.json()})
      .then ((data) => {
        const productosFetchOwn = data.results.map((productData)=>{
            return {
                Id:productData.id,
                title:productData.title,
                price:productData.price 
            }
        }


        )
      setProductosFetch(productosFetchOwn)})
    }
    
    
    return (
        <div className="ItemDetailContainer">
            <button onClick={fetch}>ver productos</button>
            <ItemDetail  DetailProducts={productosFetch}/>
        </div>
      
    )



}
export default ItemDetailContainer;