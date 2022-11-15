import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
// import Modal from './components/Modal';
import Nav from './components/Nav';
import PlaceToStay from './pages/PlaceToStay';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/place_to_stay' element={<PlaceToStay/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
