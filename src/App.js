import './App.css';
import Selector from './components/Selector';
import DailyPicture from './components/DailyPicture';
import BASE_URL from './globals.js'

function App() {
  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <DailyPicture />
      <Selector />
    </div>
  );
}

export default App;
