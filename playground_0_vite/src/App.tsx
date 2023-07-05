import { useState } from "react";

// import Alert from "./components/Alert";
// import Link from "./components/Link";
// import GameTile from "./components/GameTile";
// import Button from "./components/Button";
// import ListUsersSkeleton from "./components/Skeleton/ListUsersSkeleton";
// import SiteTileSkeleton from './components/Skeleton/SiteTileSkeleton';
// import GameTileSkeleton from './components/Skeleton/GameTileSkeleton';
// import ListUsers from "./components/Users/ListUsers";

import SiteTiles from "./components/SiteTiles/SiteTiles";
// import SiteTiles2 from "./components/SiteTiles/SiteTiles2";
import HeaderBar from "./components/HeaderBar";
import TopNavigation, {Item as TopNavigationItem} from "./components/TopNavigation";
import GameList from "./components/Games/GameList";
import GameList2 from "./components/Games/GameList2";
import {dataMenu} from "./data/useDataLoader";

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
        <GameList2 label="Popular"></GameList2>
        <GameList2 label="New Games"></GameList2>
        <SiteTiles></SiteTiles>
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
