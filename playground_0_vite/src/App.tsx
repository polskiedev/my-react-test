import React, { useEffect, useState } from 'react';

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
// import GameList2 from "../dumps/Games/GameList2";
import Accordion from "./components/Accordion/Accordion";
import SiteTiles from "./components/SiteTiles/SiteTiles";
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";
import GameList from "./components/organisms/GameList/GameList";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useTheme, ThemeName } from "./components/organisms/ThemeToggle/ThemeContext";
import ThemeToggleButton from "./components/organisms/ThemeToggle/ThemeToggleButton";
import { getThemeURL } from './helpers/helpers';

function App() {
  // let menuItems = dataMenu();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    loadThemeCSS(theme);
  }, [theme]);

  const loadThemeCSS = (themeName: ThemeName) => {
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    // if (themeLink) {
    //   themeLink.href = `${themeName}-theme.css`;
    // }
  };

  const handleThemeChange = (selectedTheme: ThemeName) => {
    toggleTheme(selectedTheme);
  };

  return <>
    <link id="theme-link" rel="stylesheet" href={getThemeURL(theme)} />
    <div data-theme={theme}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Header />
      
      <main className="my-32">
        <ThemeToggleButton/>
        <section className="test-section mx-auto lg:max-w-[928px]">
          <Accordion title="Accordion Component Title" content="1 Accordion Component Content">
            <p>2 This is the content of the accordion.</p>
          </Accordion>
        </section>
        <section className="mx-auto lg:max-w-[928px]">
          <GameList label="Popular"></GameList>
          <GameList label="New Games"></GameList>
          <SiteTiles></SiteTiles>
          Content
        </section>
      </main>
      <Footer />
      </SkeletonTheme>
    </div>
  </>
}
export default App
