import { useState } from 'react';

import './App.css';
import Selector from './components/Selector';
import DailyPicture from './components/DailyPicture';

function App() {



  const [pictureDate, setpictureDate] = useState('')
  

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <DailyPicture pictureDate={pictureDate} />
      <Selector pictureDate={pictureDate} setpictureDate={setpictureDate} />
    </div>
  );
}

export default App;
