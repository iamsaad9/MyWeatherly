// App.js
import "./App.css";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import { ActiveUnitProvider } from "./ActiveUnitContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ActiveUnitProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ActiveUnitProvider>
  );
}

export default App;
