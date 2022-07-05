import logo from './logo.svg';
import './App.css';
import Body from './component/Body';
import ItemCont from './component/ItemCont';
import Navbar from './component/Navbar';
import ItemListContainer from './component/ItemListContainer.js'
function App() {
  const onAdd =(cantidad) =>{
    alert ('agregaste ' + cantidad + ' a tu carrito')
  }
  return (
    <div className="App">
    <Navbar/>
    <ItemListContainer greetings="BIENVENIDOS A VELAS ALMALUZ"/>
    <ItemCont stock={10} initial={1} onAdd= {onAdd}/>
    <Body />
    </div>
  );
}

export default App;
  