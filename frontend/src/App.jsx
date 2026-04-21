import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Placeorder from './Pages/Placeorder';
import Orders from './Pages/Orders';
import Profile from './Pages/Profile';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product/:productId' element={<Product />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Placeorder' element={<Placeorder />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
