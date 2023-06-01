import React from "react";
import Home from "./Page/Home";
import FamilyPage from "./Page/FamilyPage";
import GetNavbar from "./components/GetNavbar";
import BooksPage from "./Page/BooksPage";
import GetFooter from "./Page/GetFooter";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <GetNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<FamilyPage />} />
        <Route path="/book" element={<BooksPage />} />
      </Routes>
      <GetFooter />
    </BrowserRouter>
  );
};

export default App;
