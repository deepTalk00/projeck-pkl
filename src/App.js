
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Layanan from './page/Layanan';
import Profil from './page/Profil';
import Navbar from './component/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar className=" fixed top-0"/>
      <Routes>
       <Route path="/"element ={<Home/>} />
       <Route path="/profil"element ={<Profil/>} />
       <Route path="/layanan"element ={<Layanan/>} />
      </Routes>
    </div>
  );
}

export default App;
