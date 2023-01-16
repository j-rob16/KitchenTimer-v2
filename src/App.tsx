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

  const updateCompletionTime = (id: number, completedTime: number) => {
    const copiedOrders: OrderType[] = [...orders];
    const pendingOrderIndex = copiedOrders.findIndex(
      (element) => element.id === id
    );
    copiedOrders[pendingOrderIndex].completedTime = completedTime;
    setOrders(copiedOrders);
  };

  return (
    <div className="app">
      <OrderForm updateOrders={updateOrders} />
      <OrderTable orders={orders} updateCompletionTime={updateCompletionTime} />
    </div>
  );
}

export default App;
