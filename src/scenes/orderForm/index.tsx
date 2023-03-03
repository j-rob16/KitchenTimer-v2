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
        <h1 className="text-xl py-2">New Order</h1>
      </div>

      {/* ORDER FORM */}
      <form
        onSubmit={saveNewOrder}
        className="border rounded-lg p-2 bg-blue-100"
      >
        {/* ITEM SELECT */}
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <div className="w-full row-span-1 col-span-2 sm:col-span-1 grid-flow-col">
            <label>
              Choose a food item:
              <select
                name="food-items"
                id="food-item-select"
                required
                onChange={handleItem}
                className="w-full p-4 rounded-md font-semibold mt-2"
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
          <div className="row-start-2 col-span-1">
            <label className="pb-4">
              Quantity:
              <select
                name="food-quantity"
                id="food-quantity-select"
                required
                onChange={handleQuantity}
                className="w-full p-4 mt-2 flex justify-center rounded-md font-semibold"
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
          <div className="row-start-2 sm:row-start-3 col-span-1">
            <label>
              Table Number:
              <input
                type="text"
                name="table-number"
                id="table-number-select"
                size={2}
                maxLength={2}
                pattern="[0-9]"
                required
                onChange={handleTableNo}
                className="w-full p-4 mt-2 flex justify-center rounded-md font-semibold"
              />
            </label>
          </div>

          {/* NOTES INPUT */}
          <div className="col-span-2 sm:col-span-1 sm:col-start-2 sm:row-span-3">
            <label>
              Notes:
              <textarea
                rows={3}
                cols={33}
                name="order-notes"
                id="order-notes-input"
                onChange={handleNote}
                className="w-full h-[89%] p-4 mt-2 flex justify-center rounded-md font-semibold"
              />
            </label>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-center">
          <input
            type="submit"
            value="Add Order"
            className="bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 border border-blue-700 rounded my-3 w-full"
          />
        </div>
      </form>
    </section>
  );
};

export default OrderForm;
