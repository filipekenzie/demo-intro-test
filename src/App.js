import "./App.css";
import Card from "./component/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card isShowPersonalInfo={true} />
      </header>
    </div>
  );
}

export default App;
