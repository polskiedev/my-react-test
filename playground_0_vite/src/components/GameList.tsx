import React, { useState } from 'react'
import {dataGame} from "../hooks/useDataLoader";
import GameTile from "../components/GameTile";

interface Props {
    className?: string;
    onClick?: () => void;
}

const GameList= ({className = ''}: Props) => {
    const classList: string[] = ["--ac-game-list"];
    const navClassList: string[] = ["carousel-btn"];
    const gameTileLinkImgClassName: string[] = [];
    const swapGameTileImg = true;
    
    //Game Asset Dimesions
    const dim = {
        imgHeight: 150,
        imgWidth: 150,
        navHeight: 36,
        navWidth: 36
    };

    const navTop = (dim.imgHeight - dim.navHeight)/2;
    const navAdjust = dim.navWidth/2;

    classList.push(`carousel group relative m-5 lg:m-0`);
    navClassList.push(`group-hover:block absolute`);
    navClassList.push(`top-[${navTop}px]`);
    gameTileLinkImgClassName.push(`block bg-center bg-cover duration-500`);
    gameTileLinkImgClassName.push(`h-[${dim.imgHeight}px] w-[${dim.imgWidth}px]`);
    gameTileLinkImgClassName.push(`max-w-[${dim.imgWidth}px] max-h-[${dim.imgHeight}px]`);

    const navLeftClassList: string[] = [...navClassList, `left-[-${navAdjust}px]`];
    const navRightClassList: string[] = [...navClassList, `right-[-${navAdjust}px]`];

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
                        <GameTile key={index} swap={swapGameTileImg} linkImgClassName={gameTileLinkImgClassName.join(" ")} {...item}></GameTile>                      
                    );
                })}
                </div>

                <div className={navLeftClassList.join(" ")}>
                    <button onClick={prevSlide}>
                        <span className="btn-icon icon-carousel-nav-left block bg-no-repeat h-[36px] w-[36px]"></span>
                    </button>
                </div>
                <div className={navRightClassList.join(" ")}>
                    <button onClick={nextSlide}>
                        <span className="btn-icon icon-carousel-nav-right block bg-no-repeat h-[36px] w-[36px]"></span>
                    </button>
                </div>

            </div>
    </>)
}

export default GameList