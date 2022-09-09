import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
