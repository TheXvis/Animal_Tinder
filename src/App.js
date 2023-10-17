import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the change to Routes
import Card from './components/Card';
import ChatPage from './components/ChatPage';
import Navbar  from './components/NavBar';
import './styles.css';


function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content-container">
        <h1 >Animal Tinder</h1>
        <Routes>
          <Route path="/" element={<Card  />} />
          <Route path="/chat/:dogName" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
