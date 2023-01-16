import { useState } from "react";
import Order from "@/shared/Order";
import OrderForm from "@/scenes/orderForm";
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
      <Order />
      <OrderForm updateOrders={updateOrders} />
    </div>
  );
}

export default App;
