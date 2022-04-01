import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import BuilderRouter from './builder/routes/BuilderRouter';


function App() {
  return (
    <div>
      <Router>
            <Routes>
                
                <Route path="/" element={<Navigate to="/builder/" />} />
                <Route path="/builder/*" element={<BuilderRouter />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
