import logo from './logo.svg';
import './App.css';
import Body from './component/Body';
import Contador from './component/Contador';
import Navbar from './component/Navbar';
function App() {
  
  return (
    <div className="App">
    <Navbar/>
    <Contador stock={10}/>
    <Body />
    </div>
  );
}

export default App;
