import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, Details } from 'src/views';

const Hahah = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" title="Home" element={<Home />} />
        <Route path="/pokemon/:name" title="Details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default Hahah;
