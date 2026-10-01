import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";

import { useShop } from "../context/Shopcontext";

function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const liked = isInWishlist(product.id);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
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
          onClick={() => toggleWishlist(product)}
          className={`absolute right-4 top-4 rounded-full border p-2 backdrop-blur-md transition ${
            liked
              ? "border-white bg-white text-black"
              : "border-white/10 bg-black/60 text-white hover:bg-white hover:text-black"
          }`}
          aria-label="Add to wishlist"
        >
          <Heart size={18} className={liked ? "fill-current" : ""} />
        </button>
      </div>

      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="mt-2 text-lg font-medium text-white transition hover:text-gray-400">
            {product.name}
          </h3>
        </Link>

        <div className="mt-3 flex items-center gap-1 text-sm text-gray-400">
          <Star size={15} className="fill-white text-white" />
          {product.rating}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-lg font-semibold text-white">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="text-sm text-gray-500 line-through">
            ₹{product.oldPrice.toLocaleString("en-IN")}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
          }}
          className="relative z-20 mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          <ShoppingBag size={17} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
