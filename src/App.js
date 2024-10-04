import "./App.css";
import Home from "./Pages/Home";
import { ActiveUnitProvider } from "./ActiveUnitContext";

function App() {
  return (
    <ActiveUnitProvider>
      <div className="App">
        <Home />
      </div>
    </ActiveUnitProvider>
  );
}

export default App;
