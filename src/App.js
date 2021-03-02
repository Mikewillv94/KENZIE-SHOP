import "./App.css";
import MenuShop from "./components/Menu";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <MenuShop />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
