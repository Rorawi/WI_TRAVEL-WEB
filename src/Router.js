import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeSection from "./components/HomeSection";
import CatalogueSection from "./components/CatalogueSection";
import MainSection from "./components/MainSection";
import Navbar from './components/Navbar';
import Footer from './components/Footer'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<HomeSection/>}/>
                    <Route path='/catalogue' element={<CatalogueSection/>}/>
                    <Route path='/main' element={<MainSection/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
            
        </div>
    );
}

export default Router;
