import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./navigation/Index";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
