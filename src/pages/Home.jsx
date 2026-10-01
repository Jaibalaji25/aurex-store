import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import products from "../data/Products";

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pt-28 sm:px-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-gray-400">
              Next-Gen Audio & Wearables
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Beyond Sound.
              <br />
              <span className="text-gray-500">Beyond Smart.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
              Discover premium audio and smart wearable technology designed for
              the way you live, work, and move.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
              >
                Explore Products
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <button className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white/10">
                <Play size={16} />
                Watch Story
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex min-h-105 items-center justify-center"
          >
            <div className="absolute h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />

            <div className="absolute h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72" />

            <div className="relative flex h-64 w-64 items-center justify-center rounded-[40px] border border-white/10 bg-linear-to-br from-gray-800 via-gray-950 to-black shadow-2xl sm:h-80 sm:w-80">
              <div className="text-center">
                <div className="text-6xl font-bold tracking-widest text-white/90">
                  A
                </div>

                <p className="mt-3 text-xs uppercase tracking-[0.4em] text-gray-500">
                  AUREX
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="border-y border-white/10 px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
            Designed for your everyday
          </p>

          <h2 className="mt-4 text-2xl font-medium text-gray-200 sm:text-3xl">
            Technology that moves with you.
          </h2>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              Featured Collection
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Built for your world.
            </h2>
          </div>

          <Link
            to="/products"
            className="hidden items-center gap-2 text-sm text-gray-400 transition hover:text-white sm:flex"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link
          to="/products"
          className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400 transition hover:text-white sm:hidden"
        >
          View All Products
          <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}

export default Home;
