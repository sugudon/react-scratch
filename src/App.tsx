import { Button } from "./stories/Button";

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <p>React + Vite</p>
      <Button label="Button" onClick={ () => console.log("Button clicked")}></Button>
    </div>
  );
}

export default App;