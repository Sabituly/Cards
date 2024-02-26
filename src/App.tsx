import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./companents/Login";
import Registration from "./companents/Registration";
import {useNavigate} from "react-router";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./state/store";

function App() {

    // const navigate = useNavigate();

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                    </Routes>

                </BrowserRouter>
            </Provider>





        </div>
    );
}

export default App;
