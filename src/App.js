// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Navber from "./Components/Navber/Navber";
import Pricing from "./Components/Pricing/Pricing";
import Charts from "./Components/Charts/Charts";

function App() {
  return (
    <div className="App">
      <Navber />
      <Charts></Charts>
      <h1 className="text-5xl">prectice money club</h1>
      <Header />
      <Pricing />
    </div>
  );
}

export default App;
