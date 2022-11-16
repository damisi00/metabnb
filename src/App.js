import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PlaceToStay from './pages/PlaceToStay';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
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
