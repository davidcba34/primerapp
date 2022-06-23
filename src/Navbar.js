import CartWidget from './CartWidget.js';
import ItemListContainer from './img/ItemList';
import './Navbar.css';

function Navbar() {
    return (
      <header className='navbar'>
        <button >Home</button>
        <p>ALMALUZ</p>
        <a src = "#">Tienda</a>
        <CartWidget />
        <ItemListContainer />
      </header>
    );
  }
  
  export default Navbar;