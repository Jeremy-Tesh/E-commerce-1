import React from 'react';
import Header from './components/Header/Header';
import Shop from './Pages/ShopPage/Shop';
import { Routes, Route } from 'react-router-dom';
import { display } from '@mui/system';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/shoppage" element={<Shop />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
