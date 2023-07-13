import React from 'react'
import { asset } from '../../../helpers/helpers';
import { default as ClassBuilder } from './GameTileClassBuilder';
import Span from '../../atoms/Span/Span';

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
}

const GameTile = ({className = '', linkImgClassName = '', item}: Props) => {
    const {_: mainCB, a: linkCB} = ClassBuilder();
    const {name, img, badge = [], url} = item;

    const placeholder = asset(`placeholders/game-thumbnail.png`);
    const gameImg = asset(`games/${img}`);
    const displayImg = img === 'placeholder' ? placeholder : gameImg;

    mainCB.addClass(className);
    linkCB.addClass(linkImgClassName);

    return (<>
        <div className={mainCB.build()}>
            <div className="absolute top-0 left-0">
                <ul>
                {badge.map((badge, badgeIndex) => {
                    return (  
                        <li key={badgeIndex}>
                            <span key={badgeIndex} className="game-badge">{badge}</span>              
                        </li>  
                    );
                })}
                </ul>
            </div>
            <a href={url} onClick={() => console.log(name) } style={{backgroundImage: `url(${displayImg})`}} className={linkCB.build()}></a>
            <div className="grid grid-cols-3 gap-1 p-1">
                <a className="col-span-2" href={url}>{name}</a>
                <button className="col-span-1 flex flex-row justify-end content-center items-start" onClick={() => console.log(name + ' menu')}>
                    <Span icon='gameinfo'></Span>
                </button>
            </div>
        </div>   
    </>)
}

export default GameTile;