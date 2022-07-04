import logo from './logo.svg';
import './App.css';
import Body from './component/Body';
import Contador from './component/Contador';
import Navbar from './component/Navbar';
import ItemListContainer from './component/ItemListContainer.js'
function App() {
  
  return (
    <div className="App">
    <Navbar/>
    <ItemListContainer greetings="BIENVENIDOS A VELAS ALMALUZ"/>
    <Contador stock={10}/>
    <Body />
    </div>
  );
}

export default App;
  