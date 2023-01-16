import React from "react";
import { OrderType } from "@/shared/types";
import Order from "@/shared/Order";

type Props = {
  orders: Array<OrderType>;
};

const OrderTable = ({ orders }: Props) => {
  return (
    <section>
      <div>
        <h2>Orders</h2>
      </div>
      <div>
        <table>
          <tr>
            <th>Item</th>
            <th>Table No.</th>
            <th>qty.</th>
            <th>Note</th>
            <th>Time Elapsed</th>
          </tr>
          <tr>
            {orders.map((order, i) => (
              <Order
                item={order.item}
                table_no={order.table_no}
                quantity={order.quantity}
                note={order.note}
                key={i}
              />
            ))}
          </tr>
        </table>
      </div>
    </section>
  );
};

export default OrderTable;
