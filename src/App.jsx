import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/homePage';
import ChatRoom from './pages/chat/chatRoom';
import HeatMap from './pages/heatmap/heatMap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/heatmap" element={<HeatMap />} />
      </Routes>
    </Router>
  );
}

export default App;
