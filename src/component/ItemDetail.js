import productos from './ItemDetailContainer';
import './ItemDetail';

function ItemDetail(props){
    return (
        <div className='item-detail'>
            {props.productos.map((productos)=>(
                <producto
                    title={productos.title}
                    description ={productos.description}
                />


            ))}

        </div>

    );
}

export default ItemDetail;