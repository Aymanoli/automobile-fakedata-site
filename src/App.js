import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Booking from './pages/Booking/Booking/Booking';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
// import { HashLink } from 'react-router-hash-link';
// import Services from './pages/Home/Services/Services';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route
              path='/booking/:serviceId'
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
            <Route path='/login' element={<Login />}></Route>

            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
