const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-indigo-950 via-[#111827] to-[#0f172a] px-7 py-16 md:px-14">
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="relative max-w-2xl">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-300">
            New Collection
          </span>

          <h2 className="mt-7 text-4xl font-bold leading-tight md:text-6xl">
            Everything you need.
            <span className="block text-indigo-400">In one place.</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-400">
            Discover quality products at great prices. Simple shopping, fast
            delivery and a better experience.
          </p>

          <button className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-500">
            Shop Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
