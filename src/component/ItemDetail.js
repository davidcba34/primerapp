
import './ItemDetail';
import { useContext, useState } from 'react';
import {CartContext} from "./CartContext";
import {link} from "react-router-dom"
import { useContext } from 'react';

function ItemDetail(props){
    const{name,id,description,price,img}=props.item
    const{addToCart} =useContext(CartContext)
    
    const [purchaseCompleted, setPurchaseCompleted]= useState(false);

    const onAdd = (count) =>{
        setPurchaseCompleted(true)
        addToCart(props.item,count)
    }
    return (
        <div className='detail-container'>
            <div className='grid-container'>
                <div className='image-container'>
                    {" "}
                    <img src={img}/>{" "}
                </div>
                <div className='data-container'>
                    <h1>{name}</h1>
                </div>
                <div className='description-container'>
                    <p className='description'>{description}</p>
                    <p className='p '>{price}</p>
                </div>

            </div>


        </div>
        
        //<div className='item-detail'>
            //{props.productos.map((productos)=>(
                //<producto
                   // title={productos.title}
                   // img ={productos.img}
                    //description ={productos.description}

                ///>


            //))}
            
        //</div>

    );
};
export default ItemDetail;