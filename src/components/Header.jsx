import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#0b0f19]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <h1 className="text-xl font-bold">
          🛍️ Shop<span className="text-indigo-400">Easy</span>
        </h1>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-indigo-400">
            Home
          </a>

          <a
            href="#products"
            className="text-sm font-medium text-slate-400 hover:text-white"
          >
            Products
          </a>

          <a
            href="#cart"
            className="text-sm font-medium text-slate-400 hover:text-white"
          >
            Cart
          </a>
        </div>

        <button className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-500">
          🛒 Cart
          <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-xs text-indigo-600">
            {totalQuantity}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
