import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Navber from "./Components/Navber/Navber";

function App() {
  return (
    <div className="App">
      <Navber />
      <h1 className="text-5xl">prectice money club</h1>
      <Header />
    </div>
  );
}

export default App;
