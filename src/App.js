import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetNavbar from "./components/GetNavbar";
import GetFooter from "./components/GetFooter";
import Home from "./Page/Home";
import BooksPage from "./Page/BooksPage";
import FamilyPage from "./Page/FamilyPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <GetNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/family" element={<FamilyPage />} />
          </Routes>
        </main>
        <GetFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
