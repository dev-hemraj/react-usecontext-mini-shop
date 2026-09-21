import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

import products from "./data/product";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      {/* NAVBAR */}

      <Header />

      {/* HERO */}
      <Hero />

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-7xl px-5 pb-24">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Our Collection
            </p>

            <h2 className="mt-2 text-3xl font-bold">Popular Products</h2>
          </div>

          <select className="rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-sm text-slate-300 outline-none focus:border-indigo-500">
            <option>All Categories</option>
            <option>Audio</option>
            <option>Accessories</option>
            <option>Wearables</option>
            <option>Bags</option>
            <option>Shoes</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <ProductList products={products} />
      </section>

      {/* CART */}
      <Cart />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
