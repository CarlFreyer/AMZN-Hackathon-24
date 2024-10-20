import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/homePage';
// import ChatComponent from './components/ChatComponent/ChatComponent';

import HeatMap from './pages/heatmap/heatMap';

import Messenger from './pages/chat/messenger'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatroom" element={<Messenger />} />
        <Route path="/heatmap" element={<HeatMap />} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </Router>
  );
}

export default App;
