import { useState } from "react";
import Order from "@/shared/Order";
import OrderForm from "@/scenes/orderForm";

function App() {
  return (
    <div className="app">
      <Order />
      <OrderForm />
    </div>
  );
}

export default App;
