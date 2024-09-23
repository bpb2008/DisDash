import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./navigation/Index";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import AddPlans from "./components/addplans/AddPlans";

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addPlans" element={<AddPlans />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
