import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Result from "./pages/Result/Result";
const App = () => {
  return (
    <Router>
        <Navbar />
      <Routes>

        <Route
          path="/"
          element={
            <div className="app">
              <Home />
            </div>
          }
        />

        <Route  path="/result" element={<Result />}/>
      </Routes>
    </Router>
  );
};

export default App;
