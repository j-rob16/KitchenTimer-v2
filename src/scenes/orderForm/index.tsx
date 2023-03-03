import { OrderType } from "@/shared/types";
import React, { useState } from "react";

type Props = {
  updateOrders: (value: OrderType) => void | null;
};

const OrderForm = ({ updateOrders }: Props) => {
  const [order, setOrder] = useState({});

  const [orderItem, setOrderItem] = useState<string>("Hamburger");
  const [orderQuantity, setOrderQuantity] = useState<number>(1);
  const [orderTableNo, setOrderTableNo] = useState<number>(0);
  const [orderNote, setOrderNote] = useState<string>("");

  const handleItem = (evt: any) => {
    setOrderItem(evt.target.value);
  };

  const handleQuantity = (evt: any) => {
    setOrderQuantity(evt.target.value);
  };

  const handleTableNo = (evt: any) => {
    setOrderTableNo(evt.target.value);
  };

  const handleNote = (evt: any) => {
    setOrderNote(evt.target.value);
  };

  const saveNewOrder = (evt: any) => {
    evt.preventDefault();
    const copiedOrder: OrderType = {completedTime: 0, orderKey: 0, updateCompletionTime(id, completedTime) {
        return null
    },};
    copiedOrder.item = orderItem;
    copiedOrder.quantity = orderQuantity;
    copiedOrder.table_no = orderTableNo;
    copiedOrder.note = orderNote;
    setOrder(copiedOrder);
    updateOrders(copiedOrder);
    setOrder({
      item: "Hamburger",
      quantity: 1,
      table_no: 0,
      note: "",
    });
    setOrderItem("Hamburger");
    setOrderQuantity(1);
    setOrderTableNo(0);
    setOrderNote("");
    evt.target.reset();
  };

  return (
    <section className="w-5/6 mx-auto mt-16">
      {/* SECTION TITLE */}
      <div>
        <h1>New Order:</h1>
      </div>

      {/* ORDER FORM */}
      <form onSubmit={saveNewOrder}>
        {/* ITEM SELECT */}
        <div>
          <label>
            Choose a food item:
            <select
              name="food-items"
              id="food-item-select"
              required
              onChange={handleItem}
            >
              <optgroup label="Menu Items:">
                <option value="Hamburger">Hamburger</option>
                <option value="Fries">Fries</option>
                <option value="Ribeye Steak">Ribeye Steak</option>
                <option value="Chicken Alfredo Fettuccine">
                  Chicken Alfredo Fettuccine
                </option>
              </optgroup>
            </select>
          </label>
        </div>

        {/* QUANTITY SELECT */}
        <div>
          <label>
            Choose an amount:
            <select
              name="food-quantity"
              id="food-quantity-select"
              required
              onChange={handleQuantity}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>

        {/* TABLE SELECT */}
        <div>
          <label>
            Choose a table number:
            <input
              type="text"
              name="table-number"
              id="table-number-select"
              size={2}
              maxLength={2}
              pattern="[0-9]"
              required
              onChange={handleTableNo}
            />
          </label>
        </div>

        {/* NOTES INPUT */}
        <div>
          <label>
            Notes:
            <textarea
              rows={10}
              cols={30}
              name="order-notes"
              id="order-notes-input"
              onChange={handleNote}
            />
          </label>
        </div>

        {/* SUBMIT BUTTON */}
        <div>
          <input type="submit" value="Add Order" />
        </div>
      </form>
    </section>
  );
};

export default OrderForm;
