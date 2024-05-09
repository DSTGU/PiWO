import './App.css';
import './Style.css';
import Hero from './Pages/Hero';
import Navbar from './Pages/Navbar';
import Browse from './Pages/Browse';
import Rent from './Pages/Rent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Switch separately
import HotelPage from './Pages/HotelPage';

function App() {
  return (
    
    <div className="App">

    <Router>
        <Navbar></Navbar>
        
        <Hero></Hero>

        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/hotel/:hotelId" element={<HotelPage />} />
        </Routes>

        <Rent></Rent>


    </Router>

    </div>



  );
}

export default App;
