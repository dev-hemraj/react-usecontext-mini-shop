import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const handleProductItem = () => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCartItems(updatedCart);
    } else {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        emoji: product.emoji,
        quantity: 1,
      };
      setCartItems([...cartItems, newProduct]);
    }
  };
  return (
    <div
      key={product.id}
      className="group overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      {/* PRODUCT IMAGE */}
      <div className="flex h-56 items-center justify-center bg-[#151c2b] text-7xl transition duration-300 group-hover:bg-indigo-950/40">
        {product.emoji}
      </div>

      {/* PRODUCT INFO */}
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          {product.category}
        </p>

        <h3 className="mt-2 text-lg font-bold">{product.name}</h3>

        <div className="mt-2 text-sm tracking-wide text-yellow-400">★★★★★</div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold">€{product.price}</span>

          <button
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-500"
            onClick={handleProductItem}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
