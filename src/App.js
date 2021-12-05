
import './App.css';
import Timer from './components/timer'

function App() {
  return (
    <div className="App">
      <Timer start="60" step="1000" />
      <Timer start="60" step="2000" />
          </div>
  );
}

export default App;
