import React from "react";
import { OrderType } from "@/shared/types";
import Order from "@/shared/Order";

type Props = {
  orders: Array<OrderType>;
  updateCompletionTime: (id: number, completedTime: number) => void;
};

const OrderTable = ({ orders, updateCompletionTime }: Props) => {
  return (
    <section>
      <div>
        <h2>Orders</h2>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Table No.</th>
              <th>qty.</th>
              <th>Note</th>
              <th>Time Elapsed</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <Order
                item={order.item}
                table_no={order.table_no}
                quantity={order.quantity}
                note={order.note}
                orderKey={i}
                key={i}
                updateCompletionTime={updateCompletionTime}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderTable;
