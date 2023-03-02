import { TrackerType } from '@/shared/types';
import React from 'react'

const PerformanceTracker = ({ totalOrdersCompleted }: TrackerType) => {
  return (
    <>
      <div>PerformanceTracker</div>
      <p>{totalOrdersCompleted} orders completed so far</p>
    </>
    );
};

export default PerformanceTracker