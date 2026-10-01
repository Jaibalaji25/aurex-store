import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

import { useShop } from "../context/ShopContext";

function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  if (wishlist.length === 0) {
    return (
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white sm:px-8">
        <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/4">
              <Heart size={30} className="text-gray-400" />
            </div>

            <h1 className="mt-6 text-3xl font-semibold">
              Your Wishlist is Empty
            </h1>

            <p className="mt-3 text-gray-500">
              Save your favorite AUREX products here.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            AUREX
          </p>

          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Your Wishlist
          </h1>

          <p className="mt-4 text-gray-500">
            {wishlist.length} saved product
            {wishlist.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlist.map((product) => (
            <motion.div
              key={product.id}
              layout
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/3"
            >
              <div className="relative aspect-square overflow-hidden bg-white/4">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className="absolute right-4 top-4 rounded-full border border-white bg-white p-2 text-black"
                >
                  <Heart size={18} className="fill-current" />
                </button>
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  {product.category}
                </p>

                <Link to={`/products/${product.id}`}>
                  <h2 className="mt-2 text-lg font-medium transition hover:text-gray-400">
                    {product.name}
                  </h2>
                </Link>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-lg font-semibold">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>

                  <span className="text-sm text-gray-500 line-through">
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-medium text-black transition hover:bg-gray-200"
                  >
                    <ShoppingBag size={17} />
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-white/30 hover:text-white"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Wishlist;
