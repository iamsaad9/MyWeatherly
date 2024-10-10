import "./App.css";
import Home from "./Pages/Home";
import Login from './Pages/Login'
import { ActiveUnitProvider } from "./ActiveUnitContext";

function App() {
  return (
    <ActiveUnitProvider>
      <div className="App">
        <Home />
        {/* <Login/> */}
      </div>
    </ActiveUnitProvider>
  );
}

export default App;
