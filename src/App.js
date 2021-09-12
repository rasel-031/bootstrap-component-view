import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.scss';
// import Home from "./components/home";
import NavBar from "./components/NavBar";
import BAlert from "./components/BAlert";
import Bbutton from "./components/Bbutton";
import Bcards from "./components/Bcards";
import Bcarousel from "./components/Bcarousel";
import Bpopover from "./components/Bpopover";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <h3>Bootstrap Alert</h3>
      <BAlert />
      <br />
      <h3>Bootstrap Button</h3>
      <Bbutton />
      <br />
      <h3>Bootstrap Image Carousels</h3>
      <Bcarousel />
      <br />
      <h3>Bootstrap Pop Over Display</h3>
      <Bpopover />
      <br />
      <h3>Bootstrap Cards</h3>
      <Bcards />
      <br />
      <h3>The End</h3>
    </div>
  );
}

export default App;
