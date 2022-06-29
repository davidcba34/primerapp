import CartWidget from './CartWidget.js';
import './Navbar.css';

function Navbar() {
    return (
      <header className='navbar'>
        <a href='#'>Home</a>
        <p>ALMALUZ</p>
        <a href = "#">Tienda</a>
        <CartWidget/>
      </header>
    );
    
  }
  
  export default Navbar;