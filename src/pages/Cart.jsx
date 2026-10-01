import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

import { useShop } from "../context/Shopcontext";

function Cart() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useShop();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white sm:px-8">
        <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/4">
              <ShoppingBag size={30} className="text-gray-400" />
            </div>

            <h1 className="mt-6 text-3xl font-semibold">Your cart is empty</h1>

            <p className="mt-3 text-gray-500">
              Add some AUREX products to your cart.
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

          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Your Cart</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          {/* Cart Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/3 p-4 sm:flex-row sm:items-center sm:p-5"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="h-32 w-full rounded-2xl object-cover sm:h-28 sm:w-28"
                />

                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {item.category}
                  </p>

                  <h2 className="mt-2 text-lg font-medium">{item.name}</h2>

                  <p className="mt-2 text-sm text-gray-400">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 transition hover:text-white"
                    aria-label="Remove product"
                  >
                    <Trash2 size={18} />
                  </button>

                  <div className="flex items-center rounded-full border border-white/10">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2.5 text-gray-400 transition hover:text-white"
                    >
                      <Minus size={15} />
                    </button>

                    <span className="w-8 text-center text-sm">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2.5 text-gray-400 transition hover:text-white"
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-3xl border border-white/10 bg-white/3 p-6">
            <h2 className="text-xl font-medium">Order Summary</h2>

            <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
              <span>Shipping</span>
              <span className="text-white">Free</span>
            </div>

            <div className="my-6 border-t border-white/10" />

            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Total</span>

              <span className="text-xl font-semibold">
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-full bg-white py-4 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/products"
              className="mt-4 block text-center text-sm text-gray-500 transition hover:text-white"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
