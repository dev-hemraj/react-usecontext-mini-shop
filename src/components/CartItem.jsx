import React from "react";

const CartItem = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-[#151c2b] text-4xl">
          🎧
        </div>

        <div className="flex-1">
          <p className="text-xs font-semibold uppercase text-indigo-400">
            Audio
          </p>

          <h3 className="mt-1 font-bold">Wireless Headphones</h3>

          <p className="mt-1 text-sm text-slate-500">€59.99</p>
        </div>

        {/* QUANTITY */}
        <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-[#0b0f19] p-1">
          <button className="h-8 w-8 rounded-lg text-slate-300 hover:bg-slate-800">
            −
          </button>

          <span className="w-5 text-center font-semibold">1</span>

          <button className="h-8 w-8 rounded-lg text-slate-300 hover:bg-slate-800">
            +
          </button>
        </div>

        <div className="flex items-center justify-between gap-6 sm:block sm:text-right">
          <p className="font-bold">€59.99</p>

          <button className="mt-2 text-sm font-medium text-red-400 hover:text-red-300">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
