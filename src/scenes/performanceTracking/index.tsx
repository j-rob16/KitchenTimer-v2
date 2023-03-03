import { TrackerType } from '@/shared/types';
import React from 'react'

const PerformanceTracker = ({ totalOrdersCompleted, averageOrderTime }: TrackerType) => {
  return (
    <>
      <div>PerformanceTracker</div>
      <p>{totalOrdersCompleted} orders completed so far in:</p>
      <p>{averageOrderTime}</p>
    </>
    );
};

export default PerformanceTracker