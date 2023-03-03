import { useState } from "react";
import Header from "@/scenes/header";
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

    if (orders.length > 0) {
      const completedOrderArray = orders.map((order, i) => {
        return order.completedTime;
      }); 
      const totalOrderTime = completedOrderArray.reduce<number>((sumValue, currValue) => sumValue + currValue, 0);
      const averageOrderTime = totalOrderTime / orders.length;
      setAverageOrderTime(averageOrderTime);
    }

    setTotalOrdersCompleted(orders.length);
  };

  return (
    <div className="app">
      <Header />
      <OrderForm updateOrders={updateOrders} />
      <OrderTable orders={orders} updateCompletionTime={updateCompletionTime} />
      <PerformanceTracker totalOrdersCompleted={totalOrdersCompleted} averageOrderTime={averageOrderTime} />
    </div>
  );
}

export default App;
