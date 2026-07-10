import { Button } from "./stories/Button";

function App() {
  return (
    <div>
      <h1>Auto Deploy Test</h1>
      <p>React + Vite</p>
      <Button label="Button" onClick={ () => console.log("Button clicked")}></Button>
    </div>
  );
}

export default App;