import React from 'react'
import {dataGame} from "../hooks/useDataLoader";
import GameTile from "../components/GameTile";

interface Props {
    className?: string;
    onClick?: () => void;
}

const GameList= ({className = ''}: Props) => {
    const items = dataGame();
    const imgPlaceholder = `../src/assets/placeholders/game-thumbnail.png`
    const usePlaceholder = true;

    return (<>
            <div className="flex flex-row gap-1 p-2" >
            {items.map((item, index) => {
                item.img = usePlaceholder ? imgPlaceholder : `../src/assets/games/${item.img}`;

                return (    
                    <GameTile key={index} {...item}></GameTile>                      
                );
            })}
            </div>
    </>)
}

export default GameList