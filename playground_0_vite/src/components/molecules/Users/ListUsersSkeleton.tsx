import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ListUsersSkeleton = ({ count = 1 }) => {
  return (
    <React.Fragment>
      {Array(count).fill(0).map((_, i) => (
        <div key={i} className="flex rounded-md p-2 border border-solid border-gray-500 text-sm bg-gray-600">
          <div className="left-col w-[75px]">
            <Skeleton circle={true} width={50} height={50} className="w-[50px] h-[50px] rounded-full bg-white border border-solid border-gray-500" />
          </div>
          <div className="right-col w-full text-white">
            <Skeleton className="p-1 mt-2 mb-3" />
            <Skeleton count={3} className="px-1 mt-2" />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ListUsersSkeleton;
