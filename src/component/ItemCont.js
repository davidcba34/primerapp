import{useContext,useEffect, useState} from "react";
import Swal from 'sweetalert2'
function ItemCont ({onAdd}){
    const initial = 1;
    const stock =5;
    const [count, setCount] =useState (initial);
    
    useEffect(() => {
        console.log("useEffect el componente se monto")
    }, []);
    useEffect (()=>{
        console.log ("[useEffect]el estado de cambio")
    }, [count]);

    const addHandler = () =>{
        console.log("se esta sumando");
        setCount(count + 1);
    };
    const removeHandler = () =>{
        console.log("se esta restando");
        if(count > 1) setCount(count = 1);

    };

    return (
        <>
        <div className="ItemCount">
            <div className="ItemCount-add">
                <button className="removeButton" onClick={removeHandler}>
                    {" "}
                    -{" "}
                </button>
                <strong className="count">{count}</strong>
                <button className="addButton"onClick={addHandler}
                disabled ={count ===stock ?true : null}>
                    {" "}
                    +{" "}
                </button>
            </div>
            <button className="addCarrito" onClick={()=> onAdd(count)}>
                {" "}
                Agragar al carrito {""}
            </button>







        </div>
        
        
        
        
        
        </>




    )


}
export default ItemCont;