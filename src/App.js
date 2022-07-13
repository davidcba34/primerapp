import logo from './logo.svg';
import './App.css';
import ItemCont from './component/ItemCont';
import Navbar from './component/Navbar';
import ItemListContainer from './component/ItemListContainer.js'
import { Item } from './component/Item';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home'
import Tienda from './component/Tienda'
function App(){
  const onAdd =(cantidad) =>{
    alert ('agregaste ' + cantidad + ' a tu carrito')
  }
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path = "/home" element={<Home/>}></Route>
      <Route path = "/tienda" element={<Tienda/>}></Route>
    </Routes>
    <ItemListContainer greetings="BIENVENIDOS A VELAS ALMALUZ"/>
    <ItemCont stock={10} initial={1} onAdd= {onAdd}/>
    <Item />

    </div>
  );
}

export default App;
  