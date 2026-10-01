import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";

import { useShop } from "../context/ShopContext";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const product = products.find((item) => item.id === Number(id));
  const liked = product ? isInWishlist(product.id) : false;

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Product Not Found</h1>

          <Link
            to="/products"
            className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm text-black"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Images */}
          <div>
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="aspect-square overflow-hidden rounded-4xl border border-white/10 bg-white/4"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-2xl border transition ${
                    selectedImage === index ? "border-white" : "border-white/10"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              {product.category}
            </p>

            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2">
              <div className="flex gap-1">
                <Star size={17} className="fill-white text-white" />
              </div>

              <span className="text-sm text-gray-400">
                {product.rating} / 5
              </span>
            </div>

            {/* Price */}
            <div className="mt-7 flex items-center gap-4">
              <span className="text-3xl font-semibold">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              <span className="text-lg text-gray-500 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <p className="mt-7 max-w-xl leading-7 text-gray-400">
              {product.description}
            </p>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-sm font-medium">Key Features</h2>

              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-gray-400"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity + Wishlist */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center rounded-full border border-white/10">
                <button
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="p-3 text-gray-400 hover:text-white"
                >
                  <Minus size={16} />
                </button>

                <span className="w-8 text-center text-sm">{quantity}</span>

                <button
                  onClick={() => setQuantity((value) => value + 1)}
                  className="p-3 text-gray-400 hover:text-white"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className={`rounded-full border p-3 transition ${
                  liked
                    ? "border-white bg-white text-black"
                    : "border-white/10 text-white hover:border-white/30"
                }`}
              >
                <Heart size={19} className={liked ? "fill-current" : ""} />
              </button>
            </div>

            {/* Add Cart */}
            <button
              type="button"
              onClick={() => addToCart(product, quantity)}
              className="relative z-20 mt-5 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-white py-4 text-sm font-medium text-black transition hover:bg-gray-200 sm:max-w-md"
            >
              <ShoppingBag size={19} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
