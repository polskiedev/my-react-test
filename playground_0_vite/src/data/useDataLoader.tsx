import React from 'react'
import useGameList from "./useGameList";
import useTopNavigationMenu from "./useTopNavigationMenu";
import {shuffleArray} from "../helpers/helpers";


const useDataLoader = () => {
  return ([

  ]);
}

export function dataGame() {
    return shuffleArray(useGameList());
}


export function dataMenu() {
    return useTopNavigationMenu();
}

export default useDataLoader