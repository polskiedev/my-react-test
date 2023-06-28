import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import HeaderBar from "./components/HeaderBar";

function testTailwind() {
  return <div>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  </div>
}

function testBootstrap() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return <div>
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
    <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    <Button color="secondary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    <Button color="tertiary" onClick={() => setAlertVisibility(true)}>My Button</Button>
  </div>
}

function App() {
  return <div>
    <HeaderBar></HeaderBar>
  </div>
}
export default App
