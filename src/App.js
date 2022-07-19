import './App.css';
import Selector from './components/Selector';

function App() {
  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <img 
        class='daily-picture' 
        src='https://apod.nasa.gov/apod/image/2207/HalfPleiades_Venkatraman_1365.jpg' 
        alt=''
      />
      <Selector />
    </div>
  );
}

export default App;
