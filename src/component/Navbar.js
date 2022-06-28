import CartWidget from './CartWidget.js';
import './Navbar.css';
import ItemListContainer from './ItemListContainer.js'
function Navbar() {
    return (
      <header className='navbar'>
        <a href='#'>Home</a>
        <p>ALMALUZ</p>
        <a href = "#">Tienda</a>
        <CartWidget/>
        <ItemListContainer/>
      </header>
    );
  }
  
  export default Navbar;