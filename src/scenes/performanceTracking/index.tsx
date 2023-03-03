import { TrackerType } from '@/shared/types';
import React from 'react'

const PerformanceTracker = ({ totalOrdersCompleted, averageOrderTime }: TrackerType) => {
  return (
    <>
      <div className="w-5/6 mx-auto mt-12">
        <h1 className="text-xl py-2">PerformanceTracker</h1>
        <div className="border-2 rounded shadow-lg p-6 text-center">
          <p>Orders Completed:</p>
          <div>{totalOrdersCompleted}</div>
          <div>
            <p>Average Time:</p>
            <span>
              {("0" + (Math.floor(averageOrderTime / 60000) % 100)).slice(-2)}:
            </span>
            <span>
              {("0" + (Math.floor(averageOrderTime / 1000) % 60)).slice(-2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceTracker