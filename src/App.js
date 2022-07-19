import { useState } from 'react';

import './App.css';
import Selector from './components/Selector';
import DailyPicture from './components/DailyPicture';

function App() {



  const [apiParams, setapiParams] = useState('')
  

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <DailyPicture apiParams={apiParams} />
      <Selector apiParams={apiParams} setapiParams={setapiParams} />
    </div>
  );
}

export default App;
