import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import ProductCard from "../components/ProductCard";
import products from "../data/products";
import Loading from "../components/Loading";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const categories = [
    "All",
    "Earbuds",
    "Headphones",
    "Smart Watches",
    "Smart Bands",
    "Speakers",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            AUREX Collection
          </p>

          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Explore Products
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Discover audio and wearable technology designed for your everyday
            experience.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-white/10 bg-white/4 py-3 pl-11 pr-5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <SlidersHorizontal size={18} className="shrink-0 text-gray-500" />

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition ${
                  category === item
                    ? "bg-white text-black"
                    : "border border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 text-sm text-gray-500">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""} found
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-75 items-center justify-center rounded-3xl border border-white/10 bg-white/3">
            <div className="text-center">
              <p className="text-lg text-white">No products found</p>

              <p className="mt-2 text-sm text-gray-500">
                Try another search or category.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Products;
