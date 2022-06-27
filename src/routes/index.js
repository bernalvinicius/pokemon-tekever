import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, Details, ListFavourites } from 'src/views';

const Hahah = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" title="Home" element={<Home />} />
        <Route path="/pokemon/:name" title="Details" element={<Details />} />
        <Route
          path="/favourites"
          title="ListFavourites"
          element={<ListFavourites />}
        />
      </Routes>
    </Router>
  );
};

export default Hahah;
