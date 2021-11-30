import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <Header />
            <main className='container content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contacts' element={<Contact />} />
                    <Route path='category/:name' element={<Category />} />
                    <Route path='meal/:id' element={<Recipe />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;