import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItem = cartItems.length;
  return (
    <section id="cart" className="border-t border-slate-800 bg-[#080c14] py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Shopping Bag
            </p>

            <h2 className="mt-2 text-3xl font-bold">Your Cart</h2>
          </div>

          <span className="text-sm text-slate-500">
            {totalItem} {totalItem === 1 ? "Item" : "Items"}
          </span>
        </div>

        {/* CART ITEM */}
        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5 ">
          {cartItems.length >= 1 ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <h4 className="text-gray-600">Cart is Empty. Add some items. </h4>
          )}
        </div>

        {cartItems.length >= 1 && (
          <button
            onClick={() => setCartItems([])}
            className="mt-4  rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            Clear Cart
          </button>
        )}
        {/* ORDER SUMMARY */}
        <div className="ml-auto mt-8 max-w-md rounded-2xl border border-slate-800 bg-[#111827] p-6">
          <h3 className="text-lg font-bold">Order Summary</h3>

          <div className="mt-5 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Subtotal</span>

              <span className="font-medium">€{subTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Shipping</span>

              <span className="font-medium text-green-400">Free</span>
            </div>

            <div className="border-t border-slate-800 pt-4">
              <div className="flex justify-between">
                <span className="text-lg font-bold">Total</span>

                <span className="text-lg font-bold text-indigo-400">
                  €{subTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <button
            disabled={cartItems.length === 0}
            className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
