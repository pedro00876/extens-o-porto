import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import InitialScreen from "./components/InitialScreen/InitialScreen";
import TokenScreen from "./components/TokenScreen/TokenScreen";

function App() {
  return (
    <div className="App">
      <InitialScreen />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<TokenScreen />} /> */}
          <Route path="/initialScreen" element={<InitialScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
