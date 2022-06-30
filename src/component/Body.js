import {useEffect, useState} from 'react';
import './Body.css';
import Card from './Card';

function Body() {
    
    const[info,setInfo] = useState([])

    useEffect (()=>{
        fetch ('data.json')
        .then ((resp) => resp.json())
        .then ((data) => setInfo(data)) 
    }, [])
    return (
        <section className='cuerpo'>
            {info && info.map(i => <Card product={i.nombre} price={i.precio}/>)}
        </section>
    );
  }
  
   export default Body;
