import React from "react";
import Footer from "./Component/Footer";
import Report from "./Page/Report";
import Products from "./Page/Products/Products";
import Order from "./Page/Order/Order";
import Dashboard from "./Page/Dashboard";
import Supplier from "./Page/Supplier/Supplier";
import Customer from "./Page/Customer/Customer";

import Layout from "./Component/Layout";
import Sidebar from "./Component/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/order" element={<Order />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/supplier" element={<Supplier />} />
            <Route path="/report" element={<Report />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
