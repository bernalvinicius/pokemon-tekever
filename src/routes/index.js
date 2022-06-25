import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from 'src/views';

const Hahah = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" title="Home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Hahah;
