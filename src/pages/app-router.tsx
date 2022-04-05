import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Products from "./products";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Products/>}/>
        </Routes>
    );
};

export default AppRouter;