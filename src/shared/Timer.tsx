import React, { useEffect, useState } from "react";

type Props = {
  timerIsOn: boolean;
  getCompletedTime: (time: number) => void;
  getCurrentTime: (time: number) => void;
};

function Timer({ timerIsOn, getCompletedTime, getCurrentTime }: Props) {
  const [time, setTime] = useState(0);
  // const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval: any = null;

    if (timerIsOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
      getCompletedTime(time);
    }

    return () => clearInterval(interval);
  }, [timerIsOn]);

  useEffect(() => {
    getCurrentTime(time);
  }, [time])

  return (
    <>
      <div>
        <span>{("0" + (Math.floor(time / 60000) % 100)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}</span>
        {/* <span>:{("0" + (time / 10)).slice(-2)}</span> */}
      </div>
    </>
  );
}

export default Timer;
