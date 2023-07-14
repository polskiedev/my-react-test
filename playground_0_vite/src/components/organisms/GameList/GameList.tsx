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
    const [touchStartPosition, setTouchStartPosition] = useState(0);
    const [carouselTranslateX, setCarouselTranslateX] = useState(0);
    
    const [items, setItems] = useState<GameTileModel[] | null>(null);
    // const items2 = dataGame();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getGameTiles();
                setItems(data);
                handleResize();
                handleTouch();
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
                setCarouselTranslateX(translateXValue);
            }
        }
    }, [currentScroll]);

    const handleResize = () => {
        if (carouselRef.current) {
            const carouselWidth = carouselRef.current.clientWidth;
            const scrollWidth = carouselRef.current.scrollWidth;

            let maxScroll =  Math.ceil(scrollWidth / carouselWidth);
            setMaxScroll(maxScroll);
            setCurrentScroll(0);
            setCarouselTranslateX(0);
        }
    };

    const handleTouch = () => {
        carouselRef.current?.addEventListener('touchstart', handleTouchStart);
        carouselRef.current?.addEventListener('touchmove', handleTouchMove);
        carouselRef.current?.addEventListener('touchend', handleTouchEnd);
    }

    useEffect(() => {
        // Add event listeners for window resize and touch events
        window.addEventListener('resize', handleResize);
   
        // Cleanup the event listeners on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        
            carouselRef.current?.removeEventListener('touchstart', handleTouchStart);
            carouselRef.current?.removeEventListener('touchmove', handleTouchMove);
            carouselRef.current?.removeEventListener('touchend', handleTouchEnd);
    
        };
    }, []);
    
    const handleTouchStart = (event: TouchEvent) => {
        setTouchStartPosition(event.touches[0].clientX);
        console.log('Touch Start');
    };
    
    const handleTouchEnd = () => {
        setTouchStartPosition(0);
        console.log('Touch End');
    };

    const handleTouchMove = (event: TouchEvent) => {
        const touchCurrentPosition = event.touches[0].clientX;
        const touchDelta = touchCurrentPosition - touchStartPosition;
        if (carouselRef.current) {
            const carouselWidth = carouselRef.current.clientWidth;
            const scrollWidth = carouselRef.current.scrollWidth;
            // carouselRef.current.style.transform = `translateX(${touchDelta}px)`;
            console.log('carouselTranslateX: '+carouselTranslateX);
        }
        // touchDelta

        // if (touchDelta > 20) {
        //     prevSlide();
        // } else if (touchDelta < -20) {
        //     nextSlide();
        // }
        console.log('Touch move: '+touchDelta);
    };
      
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

