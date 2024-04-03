import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Any other routes you want to redirect to HomePage can be added here */}
        </Routes>
    </Router>
  );
}

export default App;