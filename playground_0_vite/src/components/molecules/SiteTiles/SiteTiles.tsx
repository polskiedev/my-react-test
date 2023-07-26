import React from 'react';
import useSiteTiles, {Tile} from './useSiteTiles';
import {asset} from '../../../helpers/helpers'

const ListSiteTiles = ({ tiles }: { tiles: Tile[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-7 mx-auto p-3 lg:p-0">
      {tiles.map((tile, key) => {
        const displayImg = asset(`cards/${tile.icon}`);
        
        return (
          <div key={key} className="bg-white p-4 shadow rounded-lg flex flex-col justify-around">
            <div className="pb-5">
              <span className="text-xl font-bold">{tile.label}</span>
              <p className="text-[#606f76]">{tile.tagline}</p>
            </div>
            <div className="pt-5 pb-1 grid grid-cols-2">
              <a href={tile.url} className="text-[#00648f] underline col-span-1">
                {tile.linktext}
              </a>
              <div className="relative col-span-1 flex justify-end items-end">
                <div className="absolute bottom-0 right-0 h-[50px] w-full bg-no-repeat bg-contain bg-right-bottom" style={{ backgroundImage: `url(${displayImg})` }}></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default useSiteTiles(ListSiteTiles);
