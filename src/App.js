import logo from './logo.svg';
import './App.css';

import Body from './component/Body';
import Welcome from './component/Welcome';
import Contador from './component/Contador';
import Navbar from './component/Navbar';
function App() {
  
  return (
    <div className="App">
    <Navbar/>
    <Welcome name = "ALMALUZ" />
    <Contador stock={10}/>
    <Body />
    </div>
  );
}

export default App;
