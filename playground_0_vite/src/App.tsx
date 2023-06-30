import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import HeaderBar from "./components/HeaderBar";
import TopNavigation from "./components/TopNavigation";

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
  let items = [
    {
      label: 'Home',
      className: '--icn-home',
      url: '/home'
    },
    {
      label: 'Slots',
      className: '--icn-slots',
      url: '/slots'
    },
    {
      label: 'Live Casino',
      className: '--icn-livecasino',
      url: '/livecasino'
    },
  ];

  return <>
    <header className="fixed w-full h-28 -top-0 -left-0">
      <HeaderBar className="h-14"></HeaderBar>
      <TopNavigation items={items} className="h-14"></TopNavigation>
    </header>
    
    <main className="my-28">
      <section>
        Content
      </section>
    </main>
    <footer>
      Footer
    </footer>
  </>
}
export default App
