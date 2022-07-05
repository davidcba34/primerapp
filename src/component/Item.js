import React from 'react'

export const Item = ({ nombre , img, precio, id }) =>{

    return(
        <div className='col'>
            <div className='card cardStyle'>
                <img src ={img} alt = {nombre} className ='card-img-top'/>
                <div className='card-body'>
                    <h5 className='card-title'>{nombre}</h5>
                    <p>{precio}</p>
                    <a href='#'></a>
                    <button className='btn btn_ver_mas'>Ver más</button>
                </div>
                
            </div>

        </div>
    )
}