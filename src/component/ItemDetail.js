
import './ItemDetail';

function ItemDetail(props){
    return (
        <div className='item-detail'>
            {props.productos.map((productos)=>(
                <producto
                    title={productos.title}
                    img ={productos.img}
                    description ={productos.description}

                />


            ))}

        </div>

    );
}
const titleHandler = (event)=>{
    
}

function ItemDetail ({item}){
    
    onAdd (quantityToAdd){

    }
    return(


    )
}

export default ItemDetail;