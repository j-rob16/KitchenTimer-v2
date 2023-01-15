import React from "react";

type Props = {};

const OrderForm = (props: Props) => {
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
                <option value="burger">Burger</option>
                <option value="fries">Fries</option>
                <option value="salad">Salad</option>
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
            <textarea rows={10} cols={30} />
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
