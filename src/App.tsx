import { useState } from "react";
import OrderForm from "@/scenes/orderForm";
import OrderTable from "@/scenes/orderTable";
import PerformanceTracker from "@/scenes/performanceTracking";
import { OrderType } from "@/shared/types";

function App() {
  const [orders, setOrders] = useState<Array<OrderType>>([]);
  const [totalOrdersCompleted, setTotalOrdersCompleted] = useState<number>(0);
  const [averageOrderTime, setAverageOrderTime] = useState<number>(0);

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

    setTotalOrdersCompleted(orders.length);
  };

  return (
    <div className="app">
      <OrderForm updateOrders={updateOrders} />
      <OrderTable orders={orders} updateCompletionTime={updateCompletionTime} />
      <PerformanceTracker totalOrdersCompleted={totalOrdersCompleted} />
    </div>
  );
}

export default App;
