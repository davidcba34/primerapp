import '../component/CartWidget.css'
import imagen from '../img/carrito-de-compras.png';
function CartWidget() {
    return (
      <img className='img' src={imagen} />
    );
  }
  
  export default CartWidget;