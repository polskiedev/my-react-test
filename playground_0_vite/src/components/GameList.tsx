import React, { useState } from 'react'
import {dataGame} from "../hooks/useDataLoader";
import GameTile from "../components/GameTile";

interface Props {
    className?: string;
    onClick?: () => void;
}

const GameList= ({className = ''}: Props) => {
    let classList: string[] = ["--ac-game-list"];
    classList.push("carousel group relative");
    
    if(!!className) classList.push(className);

    const items = dataGame();
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
    };

    return (<>
            <div className={classList.join(" ")}>
                <div className="flex flex-row gap-1 overflow-hidden">
                {items.map((item, index) => {
           
                    return (    
                        <GameTile key={index} swap={true} {...item}></GameTile>                      
                    );
                })}
                </div>

                <div className="hidden group-hover:block">
                    <button onClick={prevSlide} className="carousel-btn flex flex-row justify-end content-center items-start absolute top-[57px] -left-[18px]">
                        <span className="btn-icon icon-carousel-nav-left block bg-no-repeat h-[36px] w-[36px]"></span>
                    </button>
                </div>
                <div className="hidden group-hover:block">
                    <button onClick={nextSlide} className="carousel-btn flex flex-row justify-end content-center items-start absolute top-[57px] -right-[18px]">
                        <span className="btn-icon icon-carousel-nav-right block bg-no-repeat h-[36px] w-[36px]"></span>
                    </button>
                </div>

            </div>
    </>)
}

export default GameList