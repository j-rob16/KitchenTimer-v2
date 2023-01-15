import { useState } from "react";
import Order from "@/shared/Order";
import OrderForm from "@/scenes/orderForm";

function App() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="app">
      <Order />
      <OrderForm />
    </div>
  );
}

export default App;
