import{useEffect, useState} from "react";
import Swal from 'sweetalert2'
function ItemCont ({stock, initial, onAdd}){
    const [num, setNum] = useState(initial);

    useEffect ( ()=>{
        if (num === stock -2){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Quedan pocas unidades',
                timer:2000
              })
        }
        
    }, [num])
    const sumar = ()=>{
        if (num < stock){
        setNum(num + 1)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Has llegado al maximo de stock de este producto',
                tier:2000
              })
        }
    }
    const restar = () => {
        if (num> initial){
            setNum(num - 1)
        }
    }
    const reiniciar = () => {
        setNum(initial)
    }

    return(
        <>
            <h3 style = {{marginLeft: 20}}>{num}</h3>
            <p>{stock > 1 ?`${stock}unidades disponibles`:`${stock}unidad disponible`}</p>
            <button onClick={sumar}>Suma</button>
            <button onClick={restar}>Restar</button>
            <button onClick={reiniciar}>Reiniciar</button>

            <button onClick={()=>onAdd (num)}>{num > initial ?`Agragar al carrito`: `Elegir tu cantidad`}</button>
        </>

    )
}
export default ItemCont;