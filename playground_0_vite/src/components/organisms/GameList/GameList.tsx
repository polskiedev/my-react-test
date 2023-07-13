import React, { useEffect, useState, useRef } from 'react';
import GameTile from "../../molecules/GameTile/GameTile";
import {generateSlug} from "../../../helpers/helpers"

import { getGameTiles } from '../../../api/services/GameApiService';
import { GameTile as GameTileModel } from "../../../api/models/GameApiResponse";
import {default as ClassBuilder} from './GameListClassBuilder';
import GameTileSkeleton from '../../Skeleton/GameTileSkeleton';
import Span from '../../atoms/Span/Span';
import {dataGame} from "../../../data/useDataLoader";

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentMaxScroll, setMaxScroll] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);
    
    const [items, setItems] = useState<GameTileModel[] | null>(null);
    // const items2 = dataGame();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getGameTiles();
                setItems(data);
                handleChange()
            } catch (error) {
                // Handle error
                console.error('Error fetching game tiles:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (carouselRef.current) {
            const carouselWidth = carouselRef.current.clientWidth;
            const scrollWidth = carouselRef.current.scrollWidth;
            let translateXValue = currentScroll * -carouselWidth;

            let maxScroll =  Math.ceil(scrollWidth / carouselWidth);
            setMaxScroll(maxScroll);

            if(currentScroll < maxScroll && currentScroll >= 0) {

                console.log('currentScroll: '+currentScroll);
                console.log('carouselWidth: '+carouselWidth);
                console.log('scrollWidth: '+scrollWidth);
    
                console.log('maxScroll: '+maxScroll);
                console.log('currentScroll: '+currentScroll);
                console.log('translateXValue: '+translateXValue);
    
                console.log('================');
    
                if(currentScroll + 1 === maxScroll) {
                    translateXValue =  carouselWidth-scrollWidth;
                }
                
                carouselRef.current.style.transform = `translateX(${translateXValue}px)`;
            }
        }
    }, [currentScroll]);

    const handleChange = () => {
        if (carouselRef.current) {
            const carouselWidth = carouselRef.current.clientWidth;
            const scrollWidth = carouselRef.current.scrollWidth;

            let maxScroll =  Math.ceil(scrollWidth / carouselWidth);
            setMaxScroll(maxScroll);
            setCurrentScroll(0);
        }
    };

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', handleChange);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleChange);
        };
    }, []);

    const prevSlide = () => {
        if (items && currentScroll > 0) {
            setCurrentScroll(currentScroll-1);
            console.log(currentScroll-1);
        }
    };

    const nextSlide = () => {
        if (items && currentMaxScroll > (currentScroll + 1)) {
            setCurrentScroll(currentScroll+1);
            console.log(currentScroll+1);
        }
    };
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
    const prevSlide1 = () => {
        if (items) {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
            
            setCurrentIndex(newIndex);
            console.log('prev slide: '+ newIndex);
            // console.log(items);
        }
    };

    const nextSlide1 = () => {
        if (items) {
            const isLastSlide = currentIndex === items.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
    
            setCurrentIndex(newIndex);
            console.log('next slide: ' + newIndex);
            // console.log(items);
        }
    };
////////////////////
    return (<>
            {items ? (
            <div className={mainCB.build()}>
                {currentMaxScroll}-{currentScroll+1}
                <GameListHeader label={label}></GameListHeader>
                <div className="carousel group relative mx-5 lg:mx-0">
                    <GameListCarousel items={items} currentIndex={currentIndex} carouselRef={carouselRef}></GameListCarousel>
     
                    <GameListCarouselNavigation
                        gotoPrev={() => prevSlide()}
                        gotoNext={() => nextSlide()}
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

const GameListCarousel = ({items, currentIndex, carouselRef}: { items: GameTileModel[], currentIndex: number, carouselRef: any}) => {
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

