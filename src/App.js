import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './pages/Booking/Booking/Booking';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
// import Services from './pages/Home/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/booking/:serviceId' element={<Booking/>}></Route>

          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
