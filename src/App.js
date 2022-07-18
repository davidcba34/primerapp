import logo from './logo.svg';
import './App.css';
import ItemCont from './component/ItemCont';
import Navbar from './component/Navbar';
import ItemListContainer from './component/ItemListContainer.js'
import { Item } from './component/Item';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home'
import Tienda from './component/Tienda'
import NewForm from './component/Form/NewForm';
import Form from './component/Form/Form';
import {CartProvider} from "./component/CartContext"
function App(){
  const onAdd =(cantidad) =>{
    alert ('agregaste ' + cantidad + ' a tu carrito')
  }
  const addFormHandler = (newForm) => {
    ItemDetail.push(newForm)
  }
  return (
   
      <div className="App">
        <CartProvider>

       <Navbar/>
       <Routes>
         <Route path = "/home" element={<Home/>}></Route>
         <Route path = "/tienda" element={<ItemListContainer greetings="EN NUESTRA PAGINA DE PRODUCTOS, ENCONTRARAS LO QUE NECESITAS ."/>}></Route>
       </Routes>
        <NewForm onAddForm ={addFormHandler}/>
        <ItemCont stock={10} initial={1} onAdd= {onAdd}/>
        <Item />
        </CartProvider>
       
     </div>
    
    
  );
}

export default App;
  