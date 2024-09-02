import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Transaction from './Transaction';
import SlideUpPage from './SlideUpPage'; // Import the SlideUpPage component
import Payscreen from './Payscreen';
import Finalpay from './Finalpay';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/payscreen" element={<Payscreen />} />
        <Route path="/finalpay" element={<Finalpay />} />
      </Routes>
    </div>
  );
}

export default App;