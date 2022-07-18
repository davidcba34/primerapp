import{useEffect, useState} from "react";
import Swal from 'sweetalert2'
function ItemCont ({stock, initial, onAdd}){
    const [num, setNum] = useState(initial);
    const [newSumar, setNewSumar] = useState("")
    const [newRestar, setNewRestar] = useState("")
    const [newReiniciar, setNewReiniciar] = useState("")

    const sumarHandler =(event) =>{
        setNewSumar(event.target.value)
    }
    const restarHandler = (event) =>{
        setNewRestar(event.target.value)
    }
    const reiniciarHandler = (event) =>{
        setNewReiniciar(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault();

        const newForm = {
            title: newTitle,
            amount : newAmount,
            date: new Date (NewDate)
        }

        props.onSaveData(newForm)

        setNewSumar("")
        setNewRestar("")
        setNewReiniciar("")
    }


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
     
    const sumarHandler = ()=>{
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
    const restarHandler = () => {
        if (num> initial){
            setNum(num - 1)
        }
    }
    const reiniciarHandler = () => {
        setNum(initial)
    }

    return(
        <>
            <h3 style = {{marginLeft: 20}}>{num}</h3>
            <p>{stock > 1 ?`${stock}unidades disponibles`:`${stock}unidad disponible`}</p>
            <button onClick={sumarHandler}>Suma</button>
            <button onClick={restarHandler}>Restar</button>
            <button onClick={reiniciarHandler}>Reiniciar</button>

            <button onClick={()=>onAdd (num)}>{num > initial ?`Agragar al carrito`: `Elegir tu cantidad`}</button>
        </>

    )
}
export default ItemCont;