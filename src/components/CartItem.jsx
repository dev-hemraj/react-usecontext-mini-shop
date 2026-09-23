import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ cartItem }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center mt-2 mb-2">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-[#151c2b] text-4xl">
        {cartItem.emoji}
      </div>

      <div className="flex-1">
        <p className="text-xs font-semibold uppercase text-indigo-400">
          {cartItem.category}
        </p>

        <h3 className="mt-1 font-bold">{cartItem.name}</h3>

        <p className="mt-1 text-sm text-slate-500">€{cartItem.price}</p>
      </div>

      {/* QUANTITY */}
      <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-[#0b0f19] p-1">
        <button
          className="h-8 w-8 rounded-lg text-slate-300 hover:bg-slate-800"
          onClick={() =>
            setCartItems(
              cartItems.map((item) =>
                item.id === cartItem.id && item.quantity > 1
                  ? { ...item, quantity: item.quantity - 1 }
                  : item,
              ),
            )
          }
        >
          −
        </button>

        <span className="w-5 text-center font-semibold">
          {cartItem.quantity}
        </span>

        <button
          className="h-8 w-8 rounded-lg text-slate-300 hover:bg-slate-800"
          onClick={() =>
            setCartItems(
              cartItems.map((item) =>
                item.id === cartItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            )
          }
        >
          +
        </button>
      </div>

      <div className="flex items-center justify-between gap-6 sm:block sm:text-right">
        <p className="font-bold">
          €{(cartItem.quantity * cartItem.price).toFixed(2)}
        </p>

        <button
          className="mt-2 text-sm font-medium text-red-400 hover:text-red-300"
          onClick={() => handleRemoveItem(cartItem.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
