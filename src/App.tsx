import React from 'react';
import './App.css';
import Main from "./controller/Main";
import {BrowserRouter} from "react-router-dom";
import Login from "./controller/Login";


function App() {
    // 获取登录标识
    let key = localStorage.getItem("uk");
    if (key === null) {
        return (
            <BrowserRouter>
                <Login name={'zxj'}></Login>
            </BrowserRouter>
        );
    } else {
        return (
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        );
    }
}

export default App;
