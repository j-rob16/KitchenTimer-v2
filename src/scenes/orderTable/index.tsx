import React from "react";
import { OrderType } from "@/shared/types";
import Order from "@/shared/Order";

type Props = {
  orders: Array<OrderType>;
  updateCompletionTime: (id: number, completedTime: number) => void;
};

const OrderTable = ({ orders, updateCompletionTime }: Props) => {
  return (
    <section className="w-full mx-auto mt-12">
      <div>
        <h2 className="text-xl py-2">Orders</h2>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase">
            <tr className="text-sm p-4 bg-blue-300">
              <th className="px-6 py-3">Item</th>
              <th className="px-6 py-3">Table</th>
              <th className="px-6 py-3">qty.</th>
              <th className="px-6 py-3">Note</th>
              <th className="px-6 py-3">Time</th>
              <th>Action</th>
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
                completedTime={order.completedTime}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderTable;
