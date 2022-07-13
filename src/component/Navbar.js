import CartWidget from './CartWidget.js';
import './Navbar.css';
import {NavLink} from 'react-router-dom'
function Navbar() {
    return (
      <header className='navbar'>
         <nav>
            <ul>
              <li><NavLink activeClassName='active' to='/home'>Home</NavLink></li>
              <li><NavLink activeClassName='active' to = '/tienda'>Tienda</NavLink></li>
            </ul>
         </nav>
        
        <p className='title'>ALMALUZ</p>
        
        <CartWidget/>
      </header>
    );
    
  }
  
  export default Navbar;