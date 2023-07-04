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
            <div className="carousel">
                <div className="flex flex-row gap-1 overflow-hidden">
                {items.map((item, index) => {
                    item.img = usePlaceholder ? imgPlaceholder : `../src/assets/games/${item.img}`;

                    return (    
                        <GameTile key={index} {...item}></GameTile>                      
                    );
                })}
                </div>

                <button className="carousel-btn flex flex-row justify-end content-center items-start">
                    <span className="btn-icon icon-carousel-nav-left block bg-no-repeat h-[36px] w-[36px]"></span>
                </button>
                <button className="carousel-btn flex flex-row justify-end content-center items-start">
                    <span className="btn-icon icon-carousel-nav-right block bg-no-repeat h-[36px] w-[36px]"></span>
                </button>
          
            </div>
    </>)
}

export default GameList