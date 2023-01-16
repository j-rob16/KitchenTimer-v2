import { useEffect, useState } from "react";
import Timer from "./Timer";
import { OrderType } from "./types";

type Props = {};

const Order = ({
  item,
  table_no,
  quantity,
  note,
  key,
  updateCompletionTime,
}: OrderType) => {
  const [orderIsOpen, setOrderIsOpen] = useState(true);
  const [completedTime, setCompletedTime] = useState(0);

  const getCompletedTime = (time: number) => {
    setCompletedTime(time);
  };

  useEffect(() => {
    updateCompletionTime(key, completedTime);
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
