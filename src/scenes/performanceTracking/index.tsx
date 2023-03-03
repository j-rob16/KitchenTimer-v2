import { TrackerType } from '@/shared/types';
import React from 'react'

const PerformanceTracker = ({ totalOrdersCompleted, averageOrderTime }: TrackerType) => {
  return (
    <>
      <div>PerformanceTracker</div>
      <p>{totalOrdersCompleted} orders completed so far in an average of:</p>
      <span>{("0" + (Math.floor(averageOrderTime / 60000) % 100)).slice(-2)}:</span>
      <span>{("0" + (Math.floor(averageOrderTime / 1000) % 60)).slice(-2)}</span>
      <p>seconds</p>
    </>
  );
};

export default PerformanceTracker