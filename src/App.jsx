import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="main"></div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
