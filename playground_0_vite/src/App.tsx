import { useState } from "react";

// import Alert from "./components/Alert";
// import Link from "./components/Link";
// import GameTile from "./components/GameTile";
// import Button from "./components/Button";
// import ListUsersSkeleton from "./components/Skeleton/ListUsersSkeleton";
// import SiteTileSkeleton from './components/Skeleton/SiteTileSkeleton';
// import GameTileSkeleton from './components/Skeleton/GameTileSkeleton';
// import ListUsers from "./components/Users/ListUsers";
// import AcButton from "./components/molecules/ExtButton/ExtButton"
// import AcSpan from "./components/atoms/Span/Span"
// import SiteTiles2 from "./components/SiteTiles/SiteTiles2";
// import TopNavigation, {Item as TopNavigationItem} from "../dumps/TopNavigation";
// import GameList from "./components/Games/GameList";
// import TopNavigation from "./components/molecules/TopNavigation/TopNavigation";
// import HeaderBar from "./components/molecules/HeaderBar/HeaderBar";
// import {dataMenu} from "./data/useDataLoader";
import Accordion from "./components/Accordion/Accordion";
import SiteTiles from "./components/SiteTiles/SiteTiles";
import GameList2 from "./components/Games/GameList2";
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";
import GameTile from "./components/molecules/GameTile/GameTileStorybook";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  // let menuItems = dataMenu();

  return <>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <Header />
    
    <main className="my-32">
      <section className="test-section mx-auto lg:max-w-[928px]">
        <GameTile />
        <Accordion title="Accordion Component Title" content="1 Accordion Component Content">
          <p>2 This is the content of the accordion.</p>
        </Accordion>
      </section>
      <section className="mx-auto lg:max-w-[928px]">
        <GameList2 label="Popular"></GameList2>
        <GameList2 label="New Games"></GameList2>
        <SiteTiles></SiteTiles>
        Content
      </section>
    </main>
    <Footer />
    </SkeletonTheme>
  </>
}
export default App
