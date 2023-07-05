import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SiteTileSkeleton = ({ count = 4 }) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-7 mx-auto">
      {Array(count).fill(0).map((_, i) => (
          <div key={i} className="bg-white p-4 shadow rounded-lg">
            <Skeleton className="text-lg mb-1" />
            <Skeleton className="mb-4"/>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <Skeleton count={3}></Skeleton>
              </div>
              <div className="flex flex-row align-top justify-end">
                <Skeleton width={60} height={65} />
              </div>
            </div>
          </div>
      ))}
      </div>
    </React.Fragment>
  );
};

export default SiteTileSkeleton;
