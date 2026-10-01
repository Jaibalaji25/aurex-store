function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold tracking-[0.2em]">
            AUREX<span className="text-gray-500">™</span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
            Beyond Sound. Beyond Smart. Premium audio and smart technology
            designed for everyday life.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-white">Explore</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
            <a href="/products" className="transition hover:text-white">
              Products
            </a>

            <a href="/about" className="transition hover:text-white">
              About Us
            </a>

            <a href="/contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-white">AUREX</h3>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            Experience technology built around sound, movement and modern
            lifestyle.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-gray-600">
        © 2026 AUREX™. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
