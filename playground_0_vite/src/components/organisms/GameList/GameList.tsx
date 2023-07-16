import React, { useEffect, useState, useRef } from 'react';
import GameTile from "../../molecules/GameTile/GameTile";
import {generateSlug} from "../../../helpers/helpers"

import { getGameTiles } from '../../../api/services/GameApiService';
import { GameTile as GameTileModel } from "../../../api/models/GameApiResponse";
import {default as ClassBuilder} from './GameListClassBuilder';
import GameTileSkeleton from '../../Skeleton/GameTileSkeleton';
import Span from '../../atoms/Span/Span';
import {dataGame} from "../../../data/useDataLoader";

import { useCarousel } from '../../../hooks/useCarousel/useCarousel';
import { useCarouselClientWidth } from '../../../hooks/useCarousel/useCarouselClientWidth';
import { useCarouselTouchTrigger } from '../../../hooks/useCarousel/useCarouselTouchTrigger';
import { useComponentHooks } from '../../../hooks/useComponentHooks';

interface Props {
    label: string;
    className?: string;
    onClick?: () => void;
}

interface NavProps {
    gotoPrev?: () => void;
    gotoNext?: () => void;
}

const {_: mainCB, nr: nrCB, nl: nlCB, nspan: nsCB} = ClassBuilder();

const GameList = ({className = '', label}: Props) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const useHooks = useComponentHooks();

    useHooks.add(useCarousel(carouselRef));
    useHooks.add(useCarouselClientWidth(carouselRef));
    useHooks.add(useCarouselTouchTrigger(carouselRef));

    const navHookIdx = 1;
    const currentIndex = useHooks.get(0)?.data.currIdx || -1;
    const [items, setItems] = useState<GameTileModel[] | null>(null);
    // const items2 = dataGame();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getGameTiles();
                initialize(data);
            } catch (error) {
                // Handle error
                console.error('Error fetching game tiles:', error);
            }
        };
        fetchData();
    }, []);

    const initialize = (data: GameTileModel[]) => {
        setItems(data);
        useHooks.init(data);
    };

    const prevSlide = () => {
        useHooks.get(navHookIdx)?.prevSlide();
    };

    const nextSlide = () => {
        useHooks.get(navHookIdx)?.nextSlide();
    };

    return (<>
            {items ? (
            <div className={mainCB.build()}>
                {/* {useHooks.get(1).data.print} */}
                <GameListHeader label={label}></GameListHeader>
                <div className="carousel group relative mx-5 lg:mx-0">
                    <GameListCarousel items={items} carouselRef={carouselRef} currentIndex={currentIndex}></GameListCarousel>
     
                    <GameListCarouselNavigation
                        gotoPrev={prevSlide}
                        gotoNext={nextSlide}
                        />
                </div>
            </div>
            ) : (
                <GameTileSkeleton></GameTileSkeleton>
            )}
    </>)
}

const GameListHeader = ({ label }: { label: string}) => {
    return (
        <div className="flex flex-row gap-1 justify-between items-center mx-5 lg:m-0 p-2">
            <h2 className="text-header text-xl font-bold">{label}</h2>
            <a href={"#seeall_" + generateSlug(label)} className="flex flex-row gap-1 justify-between items-center text-sm" onClick={() => console.log(label + ' -> see all')}>
                See all
                <Span icon='chevron'></Span>
            </a>
        </div>
    );
};

const GameListCarousel = ({items, currentIndex = 0, carouselRef}: { items: GameTileModel[], currentIndex?: number, carouselRef: React.RefObject<HTMLDivElement>}) => {
    return (
        <div className={`carousel-container overflow-hidden`}>
            <div ref={carouselRef} className={`carousel-slider flex flex-row gap-1 ${currentIndex > 0 ? 'translateX' : ''}`}>
            {items.map((item, index) => {
                return (    
                    <GameTile key={index} item={item} isActive={index === currentIndex} ></GameTile>                      
                );
            })}
            </div>
        </div>
    );
};

const GameListCarouselNavigation = ({gotoPrev, gotoNext}: NavProps) => {
    return (<>
        <div className={nlCB.build()}>
            <button onClick={gotoPrev}>
                <Span icon='carouselnl' className={nsCB.build()}></Span>
            </button>
        </div>
        <div className={nrCB.build()}>
            <button onClick={gotoNext}>
                <Span icon='carouselnr' className={nsCB.build()}></Span>
            </button>
        </div>
    </>);
};

export default GameList

