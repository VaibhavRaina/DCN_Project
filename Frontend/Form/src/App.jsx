
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import Submit from './Submit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Submit" element={<Submit />} />
      </Routes>
    </Router>
  );
};

export default App;
