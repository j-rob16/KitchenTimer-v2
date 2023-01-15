import { useEffect, useState } from "react";
import Timer from "./Timer";

type Props = {};

const Order = (props: Props) => {
  const [orderIsOpen, setOrderIsOpen] = useState(true);
  const [completedTime, setCompletedTime] = useState(0);

  const getCompletedTime = (time: number) => {
    setCompletedTime(time);
  };

  return (
    <section>
      <h3>Timer Test</h3>
      <div>
        <Timer timerIsOn={orderIsOpen} getCompletedTime={getCompletedTime} />
      </div>
      <button
        onClick={() => {
          setOrderIsOpen(false);
        }}
      >
        Stop timer
      </button>
      {completedTime > 0 && (
        <>
          <h4>Order completed in:</h4>
          <span>{Math.floor(completedTime / 1000) % 60} seconds</span>
        </>
      )}
    </section>
  );
};

export default Order;
