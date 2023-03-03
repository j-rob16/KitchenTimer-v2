import { useEffect, useState } from "react";
import Timer from "./Timer";
import { OrderType } from "./types";

const Order = ({
  item,
  table_no,
  quantity,
  note,
  orderKey,
  updateCompletionTime,
}: OrderType) => {
  const [orderIsOpen, setOrderIsOpen] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [completedTime, setCompletedTime] = useState<number>(0);
  const [orderStatus, setOrderStatus] = useState<string>("bg-green");

  const getCompletedTime = (time: number) => {
    setCompletedTime(time);
  };

  const getCurrentTime = (time: number) => {
    setCurrentTime(time);
  };

  useEffect(() => {
      if (currentTime < 15000) {
        setOrderStatus("bg-green");
      } else if (currentTime > 15000 && currentTime < 30000) {
        setOrderStatus("bg-yellow");
      } else {
        setOrderStatus("bg-red");
      }
  }, [currentTime])


  useEffect(() => {
    if (completedTime > 0) {
      updateCompletionTime(orderKey, completedTime);
    }
  }, [completedTime]);

  return (
    <tr className={`${orderStatus}`}>
      <td>{item}</td>
      <td>{table_no}</td>
      <td>{quantity}</td>
      <td>{note}</td>
      <td>
        <Timer
          timerIsOn={orderIsOpen}
          getCompletedTime={getCompletedTime}
          getCurrentTime={getCurrentTime}
        />
      </td>
      <td>
        { orderIsOpen ? 
          <button
            onClick={() => {
              setOrderIsOpen(false);
            }}
            className={`bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 border border-blue-700 rounded my-3 w-full`}
          >
            Complete Order
          </button>
        : 
        <p>Order Completed</p>
      }
      </td>
    </tr>
  );
};

export default Order;
