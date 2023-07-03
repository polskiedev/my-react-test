import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import HeaderBar from "./components/HeaderBar";
// import Link from "./components/Link";
import GameList from "./components/GameList";
// import GameTile from "./components/GameTile";
import TopNavigation, {Item as TopNavigationItem} from "./components/TopNavigation";

import dataTopNavigationMenu from "./hooks/useTopNavigationMenu";

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
  let menuItems = dataTopNavigationMenu();

  return <>
    <header className="fixed w-full h-28 -top-0 -left-0">
      <HeaderBar className="h-14"></HeaderBar>
      <TopNavigation className="h-14" items={menuItems as TopNavigationItem[]}></TopNavigation>
    </header>
    
    <main className="my-28">
      <section>
        <GameList></GameList>
        Content
      </section>
    </main>
    <footer>
      Footer
      <p>
        All right reserved... Thanks!
      </p>
    </footer>
  </>
}
export default App
