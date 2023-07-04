import React from 'react'

interface Props {
    img: string;
    name: string;
    url: string;
    className?: string;
    swap?: boolean;
    onClick?: () => void;
}

const GameTile = ({className = '', swap = true, name, img, url}: Props) => {
    let classList: string[] = ["--ac-game-tile"];

    const placeholder = `../src/assets/placeholders/game-thumbnail.png`
    const gameImg = `../src/assets/games/${img}`;
    const displayImg = swap ? gameImg : placeholder;

    classList.push("block text-white text-sm");
    
    if(!!className) classList.push(className);

    return (<>
        <div className={classList.join(" ")}>
            <a href={url} style={{backgroundImage: `url(${displayImg})`}} className="block h-[150px] w-[150px] max-w-[150px] max-h-[150px] bg-center bg-cover duration-500">
                <img src={placeholder} className="h-full w-full hidden" />
            </a>
            <div className="game-info grid grid-cols-3 gap-1 p-1">
                <a className="col-span-2" href={url}>{name}</a>
                <button className=" col-span-1 flex flex-row justify-end content-center items-start">
                    <span className="btn-icon icon-game-info block bg-no-repeat h-[24px] w-[24px]"></span>
                </button>
            </div>
        </div>   
    </>)
}

export default GameTile