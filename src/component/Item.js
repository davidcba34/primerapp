import React from 'react'
import {Item} from '../component/Item'
export const Item = ({name , image, price, id }) =>{

    return(
        <div className='col'>
            <div className='card cardStyle'>
                <Img src ={image} alt = {name} className ='card-img-top'/>
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p>{price}</p>
                    <a href='#'></a>
                    <button className='btn btn_ver_mas'>Ver más</button>
                </div>
                
            </div>

        </div>
    )
}