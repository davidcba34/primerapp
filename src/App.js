import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Welcome from './Welcome';
function App() {
  
  return (
    <div className="App">
    <Navbar />
    <Welcome name = "ALMALUZ" />
    <Body />
    </div>
  );
}

export default App;
