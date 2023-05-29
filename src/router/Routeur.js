import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoMatch from './NoMatch'
import Home from "../pages/Home";

const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} >
                    <Route path=':name' element={<Home />} />
                </Route>
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur;
