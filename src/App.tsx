import { useState } from "react";
import OrderForm from "@/scenes/orderForm";
import OrderTable from "@/scenes/orderTable";
import { OrderType } from "@/shared/types";

function App() {
  const [orders, setOrders] = useState<Array<OrderType>>([]);

  const updateOrders = (order: OrderType) => {
    const copiedOrders: OrderType[] = [...orders];
    order.id = orders.length;
    copiedOrders.push(order);
    setOrders(copiedOrders);
  };

  return (
    <div className="app">
      <OrderForm updateOrders={updateOrders} />
      <OrderTable orders={orders} />
    </div>
  );
}

export default App;
