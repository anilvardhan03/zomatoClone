import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComp from "./components/HomePage/HomePage";
import DemoSelect from "./components/selectOrders/SelectOrdersTemp";
import ViewRestaurant from "./components/viewRestaurant/viewRestaurant";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/select" element={<DemoSelect />} />
        <Route path="/restaurant/:id" element={<ViewRestaurant />} />
        <Route path="*" element={<HomeComp />} />
      </Routes>
    </Router>
  );
}

export default App;