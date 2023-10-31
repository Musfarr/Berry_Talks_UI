import React from 'react';
import './App.css';
import Login from './components/login2';
import Dash from './components/dash';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login2 from './components/login2';
import Sidebar from './components/sidebar';
import Form from"./components/form"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dash" element={<div> <Dash /></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
