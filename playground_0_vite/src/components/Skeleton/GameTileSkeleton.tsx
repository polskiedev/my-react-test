import React from 'react';
import Skeleton from 'react-loading-skeleton';

const GameTileSkeleton = ({ count = 6 }) => {
  return (
    <React.Fragment>
      <div className="flex flex-row gap-1 justify-between items-center mx-5 lg:m-0 p-2">
        <Skeleton height={35} width={180}/>
      </div>
      <div className="flex flex-row gap-1">
      {Array(count).fill(0).map((_, i) => (
        <div>
          <Skeleton width={150} height={150} />
        </div>
      ))}
      </div>
    </React.Fragment>
  );
};

export default GameTileSkeleton;
