import "./App.css";
import Home from "./components/Home";
import { useContext } from "react";
import Provider from "./features/Data";
function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
