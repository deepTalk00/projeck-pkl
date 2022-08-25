
import './App.css';
import HiroImage from './component/HiroImage';
import Layanan from './component/Layanan';
import Navbar from './component/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <HiroImage/>
      <Layanan />
    </div>
  );
}

export default App;
