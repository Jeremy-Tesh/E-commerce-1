import React from 'react';
import Home from './Pages/HomePage/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShopPage from './Pages/ShopPage/Shop';
import Cart from './components/Cart/Cart';
import { Route, Routes } from 'react-router-dom';
import CheckOut from './components/CheckOut/Checkout';
import './App.css';
function App() {
    return (
        <div className="app-container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shoppage" element={<ShopPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckOut />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;
