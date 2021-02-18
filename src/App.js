import logo from './logo.svg';
import './App.css';
import MainComponent from './components/Main';

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <MainComponent/>
    </div>
  );
}

export default App;
