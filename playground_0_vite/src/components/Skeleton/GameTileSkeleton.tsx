import React from 'react';
import Skeleton from 'react-loading-skeleton';

const GameTileSkeleton = ({ count = 6 }) => {
  return (
    <React.Fragment>
      <div className="flex flex-row gap-1 justify-between items-center mx-5 lg:m-0 py-2">
        <Skeleton height={35} width={200}/>
      </div>
      <div className="flex flex-row gap-1">
        <div className="carousel group relative mx-5 lg:mx-0">
          <div className="flex flex-row gap-1 overflow-hidden">
            {Array(count).fill(0).map((_, i) => (
              <div>
                <Skeleton width={150} height={150} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GameTileSkeleton;
