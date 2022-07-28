import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Descriptions from './components/descriptions';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/:id" element={<Descriptions />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
