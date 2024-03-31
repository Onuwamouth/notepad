import logo from './logo.svg';
import './App.css';
import './font;'
import img1 from './image/img1.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Learn React</div>
        <div className="ultra">Ultra</div>
        <div className="ptSerif">Serif</div>
      </header>
    </div> 
  );
}
function Images() {
  return (
    <div>
      <img src={img1} alt="Frame 1" />
    </div>
  );
}

export default App; 
Images();
