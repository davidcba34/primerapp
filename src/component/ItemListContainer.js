import { ItemList } from './ItemLis';
import './ItemListContainer.css';
function ItemListContainer({name}) {
  
  return (
    <div className="bienvenida">
      <h2>{name}</h2>
      <p>Elegi tu producto de esta lista</p>
      <ItemList ListadoProductos={productos}/>
    </div>
  );
}

export default ItemListContainer;