import React, { useEffect, useState } from 'react';
import {dataGame} from "../../data/useDataLoader";
import GameTile from "./GameItem";
import {generateSlug} from "../../helpers/helpers"

import { getGameTiles } from '../../api/services/GameApiService';
import { GameTile as GameTileModel } from "../../api/models/GameApiResponse";
import GameTileSkeleton from '../Skeleton/GameTileSkeleton';

interface Props {
    label: string;
    className?: string;
    onClick?: () => void;
}

const GameList2= ({className = '', label}: Props) => {
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

    classList.push(`text-white`);
    navClassList.push(`lg:hidden`);
    navClassList.push(`group-hover:block absolute`);
    navClassList.push(`top-[${navTop}px]`);
    gameTileLinkImgClassName.push(`block bg-center bg-cover duration-500`);
    gameTileLinkImgClassName.push(`h-[${dim.imgHeight}px] w-[${dim.imgWidth}px]`);
    gameTileLinkImgClassName.push(`max-w-[${dim.imgWidth}px] max-h-[${dim.imgHeight}px]`);

    const navLeftClassList: string[] = [...navClassList, `left-[-${navAdjust}px]`];
    const navRightClassList: string[] = [...navClassList, `right-[-${navAdjust}px]`];

    // navClassList.push(`top-[57px]`);
    // gameTileLinkImgClassName.push(`h-[150px] w-[150px]`);
    // gameTileLinkImgClassName.push(`max-w-[150px] max-h-[150px]`);

    // const navLeftClassList: string[] = [...navClassList, `left-[-18px]`];
    // const navRightClassList: string[] = [...navClassList, `right-[-18px]`];

    if(!!className) classList.push(className);
   
    const items = dataGame();
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
        console.log('prev slide');
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
        console.log('next slide');
    };

    const itemConfig = {
        swap: swapGameTileImg,
        linkImgClassName: gameTileLinkImgClassName.join(" "),
    };

    const [tiles, setTiles] = useState<GameTileModel[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getGameTiles();
                setTiles(data);
            } catch (error) {
                // Handle error
                console.error('Error fetching game tiles:', error);
            }
        };

        fetchData();
    }, []);

    return (<>
            {tiles ? (
            <div className={classList.join(" ")}>
                <div className="flex flex-row gap-1 justify-between items-center mx-5 lg:m-0 p-2">
                    <h2 className="text-header text-xl font-bold">{label}</h2>
                    <a href={"#seeall_" + generateSlug(label)} className="flex flex-row gap-1 justify-between items-center text-sm" onClick={() => console.log(label + ' -> see all')}>
                        See all
                        <span className="--ac-span icon-chevron"></span>
                    </a>
                </div>
                <div className="carousel group relative mx-5 lg:mx-0">
                    <div className="flex flex-row gap-1 overflow-hidden">
                    {items.map((item, index) => {
            
                        return (    
                            <GameTile key={index} item={item} {...itemConfig}></GameTile>                      
                        );
                    })}
                    </div>

                    <div className={navLeftClassList.join(" ")}>
                        <button onClick={prevSlide}>
                            <span className="--ac-span icon-carousel-nav-left block bg-no-repeat h-[36px] w-[36px]"></span>
                        </button>
                    </div>
                    <div className={navRightClassList.join(" ")}>
                        <button onClick={nextSlide}>
                            <span className="--ac-span icon-carousel-nav-right block bg-no-repeat h-[36px] w-[36px]"></span>
                        </button>
                    </div>
                </div>
            </div>
            ) : (
                <GameTileSkeleton></GameTileSkeleton>
            )}
    </>)
}

export default GameList2