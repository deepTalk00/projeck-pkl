import React from 'react';

import './App.css';
import HiroImage from './component/HiroImage';
import IdeaApp from './component/IdeaApp';
import Layanan from './component/Layanan';
import Navbar from './component/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <HiroImage/>
      <Layanan  />
      <IdeaApp />
    </div>
  );
}

export default App;
