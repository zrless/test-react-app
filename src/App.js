import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = () => {
    throw new Error("senry test");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" onClick={handleClick}>Sentry Test</a>
      </header>
    </div>
  );
}

export default App;
