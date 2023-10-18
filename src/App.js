import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App1 from './pages/App1';
function App() {
  // const[sidebarOpen,setSidebarOpen]=useState(false);

  return (
    <div className="App">
      <App1/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar />} />
          <Route path='/' element={<Navbar />} />

        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
