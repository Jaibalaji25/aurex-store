import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Heart, Menu, X, Sun, Moon } from "lucide-react";
import { useShop } from "../context/ShopContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlist } = useShop();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("aurex-theme") !== "light";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      localStorage.setItem("aurex-theme", "dark");
      document.documentElement.classList.remove("light");
    } else {
      localStorage.setItem("aurex-theme", "light");
      document.documentElement.classList.add("light");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}

        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-[0.2em] text-white"
        >
          AUREX<span className="text-gray-500">™</span>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-7 md:flex">
          <Link
            to="/"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Login
          </Link>
        </div>

        {/* Right Icons */}

        <div className="flex items-center gap-3">
          {/* Search */}

          <button
            className="hidden text-gray-300 transition hover:text-white sm:block"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* Theme */}

          <button
            onClick={toggleTheme}
            className="text-gray-300 transition hover:text-white"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Wishlist */}

          <Link
            to="/wishlist"
            className="relative hidden text-gray-300 transition hover:text-white sm:block"
          >
            <Heart size={20} />

            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-black">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}

          <Link
            to="/cart"
            className="relative text-gray-300 transition hover:text-white"
          >
            <ShoppingBag size={21} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-black">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 transition hover:text-white md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-sm text-gray-300 hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
              className="text-sm text-gray-300 hover:text-white"
            >
              Products
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="text-sm text-gray-300 hover:text-white"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-sm text-gray-300 hover:text-white"
            >
              Contact
            </Link>

            <Link
              to="/wishlist"
              onClick={closeMenu}
              className="text-sm text-gray-300 hover:text-white"
            >
              Wishlist
            </Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className="text-sm text-gray-300 hover:text-white"
            >
              Cart
            </Link>

            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
