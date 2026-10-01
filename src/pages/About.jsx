import { motion } from "framer-motion";
import { ArrowRight, Headphones, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="grid min-h-[65vh] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
              About AUREX
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-tight sm:text-6xl">
              Technology designed
              <span className="block text-gray-500">for real life.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              AUREX is a modern consumer electronics brand focused on creating
              premium audio and smart wearable experiences. We combine
              thoughtful design, useful technology and everyday comfort.
            </p>

            <Link
              to="/products"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Explore Products
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex min-h-100 items-center justify-center"
          >
            <div className="relative flex h-72 w-72 items-center justify-center rounded-[45px] border border-white/10 bg-linear-to-br from-gray-800 via-gray-950 to-black shadow-2xl sm:h-96 sm:w-96">
              <div className="absolute inset-8 rounded-full border border-white/10" />

              <div className="text-center">
                <div className="text-7xl font-bold tracking-widest">A</div>

                <p className="mt-3 text-xs uppercase tracking-[0.5em] text-gray-500">
                  AUREX
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="border-t border-white/10 py-20">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              What drives us
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Built around better experiences.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/3 p-7">
              <Sparkles size={24} />

              <h3 className="mt-6 text-xl font-medium">Innovation</h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                We explore modern technology to create products that feel
                useful, intuitive and effortless.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/3 p-7">
              <Headphones size={24} />

              <h3 className="mt-6 text-xl font-medium">Experience</h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                From immersive audio to smart wearables, every detail is
                designed around everyday experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/3 p-7">
              <ShieldCheck size={24} />

              <h3 className="mt-6 text-xl font-medium">Reliability</h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                We believe great technology should be dependable, comfortable
                and ready for everyday use.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Experience AUREX
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
            Beyond Sound.
            <span className="text-gray-500"> Beyond Smart.</span>
          </h2>

          <Link
            to="/products"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            Shop Collection
          </Link>
        </section>
      </div>
    </main>
  );
}

export default About;
