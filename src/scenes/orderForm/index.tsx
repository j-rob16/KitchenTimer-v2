import { OrderType } from "@/shared/types";
import React, { useState } from "react";

type Props = {
  updateOrders: (value: OrderType) => void;
};

type CopiedOrderTypes = {
  item?: string;
  quantity?: number;
  table_no?: number;
  note?: string;
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
    const copiedOrder: OrderType = {};
    copiedOrder.item = orderItem;
    copiedOrder.quantity = orderQuantity;
    copiedOrder.table_no = orderTableNo;
    copiedOrder.note = orderNote;
    setOrder(copiedOrder);
    updateOrders(copiedOrder);
    setOrder({
      item: "",
      quantity: 0,
      table_no: 0,
      note: "",
    });
    setOrderItem("");
    setOrderQuantity(0);
    setOrderTableNo(0);
    setOrderNote("");
    evt.target.reset();
  };

  return (
    <section>
      {/* SECTION TITLE */}
      <div>
        <h1>New Order:</h1>
      </div>

      {/* ORDER FORM */}
      <form>
        {/* ITEM SELECT */}
        <div>
          <label>
            Choose a food item:
            <select name="food-items" id="food-item-select" required>
              <optgroup label="Menu Items:">
                <option value="Hamburger">Hamburger</option>
                <option value="Fries">Fries</option>
                <option value="Salad">Salad</option>
              </optgroup>
            </select>
          </label>
        </div>

        {/* QUANTITY SELECT */}
        <div>
          <label>
            Choose an amount:
            <select name="food-quantity" id="food-quantity-select" required>
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
            />
          </label>
        </div>

        {/* SUBMIT BUTTON */}
        <div>
          <input type="submit" />
        </div>
      </form>
    </section>
  );
};

export default OrderForm;
