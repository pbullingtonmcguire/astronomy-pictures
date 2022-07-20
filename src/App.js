import { useState } from 'react';

import './App.css';
import Selector from './components/Selector';
import DailyPicture from './components/DailyPicture';
import RandomPictures from './components/RandomPictures';

function App() {



  const [pictureDate, setPictureDate] = useState('')
  

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <DailyPicture pictureDate={pictureDate} setPictureDate={setPictureDate} />
      <Selector pictureDate={pictureDate} setPictureDate={setPictureDate} />
      <RandomPictures setPictureDate={setPictureDate} />
    </div>
  );
}

export default App;
