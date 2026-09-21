import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
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

          <span className="text-sm text-slate-500">1 Item</span>
        </div>

        {/* CART ITEM */}
        <CartItem />

        {/* ORDER SUMMARY */}
        <div className="ml-auto mt-8 max-w-md rounded-2xl border border-slate-800 bg-[#111827] p-6">
          <h3 className="text-lg font-bold">Order Summary</h3>

          <div className="mt-5 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Subtotal</span>

              <span className="font-medium">€59.99</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Shipping</span>

              <span className="font-medium text-green-400">Free</span>
            </div>

            <div className="border-t border-slate-800 pt-4">
              <div className="flex justify-between">
                <span className="text-lg font-bold">Total</span>

                <span className="text-lg font-bold text-indigo-400">
                  €59.99
                </span>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full rounded-xl bg-indigo-600 py-3.5 font-semibold transition hover:bg-indigo-500">
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
