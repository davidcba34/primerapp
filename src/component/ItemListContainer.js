import './ItemListContainer.css';
function ItemListContainer({name}) {
  
  return (
    <div className="bienvenida">
      <h2>{name}</h2>
      <p>Elegi tu producto de esta lista</p>
    </div>
  );
}

export default ItemListContainer;