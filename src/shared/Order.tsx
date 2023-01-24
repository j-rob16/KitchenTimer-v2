import { useEffect, useState } from "react";
import Timer from "./Timer";
import { OrderType } from "./types";

type Props = {};

const Order = ({
  item,
  table_no,
  quantity,
  note,
  orderKey,
  updateCompletionTime,
}: OrderType) => {
  const [orderIsOpen, setOrderIsOpen] = useState(true);
  const [completedTime, setCompletedTime] = useState(0);

  const getCompletedTime = (time: number) => {
    setCompletedTime(time);
  };

  useEffect(() => {
    if (completedTime > 0) {
      updateCompletionTime(orderKey, completedTime);
    }
  }, [completedTime]);

  return (
    <tr>
      <td>{item}</td>
      <td>{table_no}</td>
      <td>{quantity}</td>
      <td>{note}</td>
      <td>
        <Timer timerIsOn={orderIsOpen} getCompletedTime={getCompletedTime} />
      </td>
      <td>
        <button
          onClick={() => {
            setOrderIsOpen(false);
          }}
        >
          Complete Order
        </button>
      </td>
    </tr>
  );
};

export default Order;
