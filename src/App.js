import React from 'react';
import Home from './Pages/HomePage/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShopPage from './Pages/ShopPage/Shop';
import Cart from './components/Cart/Cart';
import { Route, Routes } from 'react-router-dom';
function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shoppage" element={<ShopPage />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;
