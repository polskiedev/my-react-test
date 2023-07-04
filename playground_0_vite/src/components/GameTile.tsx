import React from 'react'
import dataGameList from "../hooks/useGameList";

interface Props {
    img: string;
    name: string;
    className?: string;
    onClick?: () => void;
}

const GameTile = ({className = '', name, img}: Props) => {
    const items = dataGameList();

    return (<>
        <div className="block text-white text-sm">
            <img src={img} className="h-[150px] w-[150px] max-w-[150px] max-h-[150px]" />
            <div className="game-info grid grid-cols-3 gap-1 p-1">
                <a className="col-span-2">{name}</a>
                <button className=" col-span-1 flex flex-row justify-end content-center items-start">
                    <span className="btn-icon icon-game-info block bg-no-repeat h-[24px] w-[24px]"></span>
                </button>
            </div>
        </div>   
    </>)
}

export default GameTile