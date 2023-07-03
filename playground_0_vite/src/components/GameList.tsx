import React from 'react'
import dataGameList from "../hooks/useGameList";
import GameTile from "../components/GameTile";

interface Props {
    className?: string;
    onClick?: () => void;
}

const GameList= ({className = ''}: Props) => {
    const items = dataGameList();

    return (<>
            <div className="flex flex-row gap-1" >
            {items.map((item, index) => {
                const { name, img } = item;
                let thumbnail = `../src/assets/placeholders/game-thumbnail.png`;

                // thumbnail = `../src/assets/games/${img}`;                
                const gameItem = {name, img: thumbnail};

                return (    
                    <GameTile key={index} {...gameItem}></GameTile>                      
                );
            })}
            </div>
    </>)
}

export default GameList