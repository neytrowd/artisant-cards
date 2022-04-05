import React from 'react';
import './App.scss';
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./pages/app-router";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <AppRouter/>
            </Router>
        </Provider>
    );
}

export default App;
