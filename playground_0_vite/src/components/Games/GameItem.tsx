import React from 'react'
import placeholder from '../../assets/placeholders/game-thumbnail.png';

interface Item {
    name: string;
    img: string;
    url: string;
    badge?: string[];
}

interface Props {
    className?: string;
    item: Item;
    linkImgClassName?: string;
    swap?: boolean;
}

const GameItem = ({className = '', linkImgClassName = '', swap = true, item}: Props) => {
    const classList: string[] = ["--ac-game-tile"];
    const linkImgClassList: string[] = [];
    
    const {name, img, badge = [], url} = item;
    // const placeholder = `./src/assets/placeholders/game-thumbnail.png`
    const gameImg = `./src/assets/games/${img}`;
    const displayImg = swap ? gameImg : placeholder;

    classList.push("block text-white text-sm relative");
    
    if(!!className) classList.push(className);
    if(!!linkImgClassName) linkImgClassList.push(linkImgClassName);

      
    return (<>
        <div className={classList.join(" ")}>
            <div className="game-badges">
                <ul className="list-group">
                {badge.map((badge, badgeIndex) => {
                    return (  
                        <li key={badgeIndex} className="list-group-item">
                            <span key={badgeIndex} className="game-badge">{badge}</span>              
                        </li>  
                    );
                })}
                </ul>
            </div>
            <a href={url} onClick={() => console.log(name) } style={{backgroundImage: `url(${displayImg})`}} className={linkImgClassList.join(" ")}>
                <img src={placeholder} className="h-full w-full invisible" />
            </a>
            <div className="game-info grid grid-cols-3 gap-1 p-1">
                <a className="col-span-2" href={url}>{name}</a>
                <button className=" col-span-1 flex flex-row justify-end content-center items-start" onClick={() => console.log(name + ' menu')}>
                    <span className="btn-icon icon-game-info block bg-no-repeat h-[24px] w-[24px]"></span>
                </button>
            </div>
        </div>   
    </>)
}

export default GameItem