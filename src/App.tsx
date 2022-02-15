import React from 'react';
import './App.css';
import Main from "./controller/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./controller/Login";
import {Todo} from "./controller/work/Todo";
import {Program} from "./controller/work/Program";
import {Planning} from "./controller/product/Planning";
import {Navigation} from "./controller/work/Navigation";
import {UserList} from "./controller/system/UserList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login name={'zxj'}></Login>} />
                <Route path="/m" element={<Main />}>
                    <Route index element={<Todo />} />
                    <Route path="work/todo" element={<Todo />} />
                    <Route path="work/program" element={<Program />} />
                    <Route path="work/navigation" element={<Navigation />}/>
                    <Route path="product/planning" element={<Planning />}/>
                    <Route path="system/user/list" element={<UserList />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
