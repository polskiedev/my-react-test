import { useState } from "react";

// import Alert from "./components/Alert";
// import Link from "./components/Link";
// import GameTile from "./components/GameTile";
// import Button from "./components/Button";
// import ListUsersSkeleton from "./components/ListUsersSkeleton";
// import ListUsers from "./components/ListUsers";
import HeaderBar from "./components/HeaderBar";
import TopNavigation, {Item as TopNavigationItem} from "./components/TopNavigation";
import GameList from "./components/GameList";

import {dataMenu} from "./hooks/useDataLoader";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  let menuItems = dataMenu();

  return <>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <header className="fixed w-full h-28 -top-0 -left-0 z-50">
      <HeaderBar className="h-14"></HeaderBar>
      <TopNavigation className="h-14" items={menuItems as TopNavigationItem[]}></TopNavigation>
    </header>
    
    <main className="my-32">
      <section className="mx-auto lg:max-w-[928px]">
        <GameList label="Popular"></GameList>
        <GameList label="New Games"></GameList>
        <GameList label="Jackpots"></GameList>
        
        Content
      </section>
    </main>
    <footer>
      Footer
      <p>
        All right reserved... Thanks!
      </p>
    </footer>
    </SkeletonTheme>
  </>
}
export default App
