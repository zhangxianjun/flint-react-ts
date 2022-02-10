import React from 'react';
import './App.css';
import Main from "./controller/Main";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Main></Main>
      </BrowserRouter>
  );
}

export default App;
