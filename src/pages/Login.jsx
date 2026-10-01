import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    toast.success("Login successful!");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white sm:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-md items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
              Welcome to AUREX
            </p>

            <h1 className="mt-3 text-4xl font-semibold">Welcome Back</h1>

            <p className="mt-3 text-sm text-gray-500">
              Sign in to continue your AUREX experience.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/3 p-6 sm:p-8"
          >
            {/* Email */}

            <div>
              <label className="text-sm text-gray-300">Email Address</label>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }));
                }}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
              />

              {errors.email && (
                <p className="mt-2 text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Password */}

            <div className="mt-5">
              <label className="text-sm text-gray-300">Password</label>

              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      password: "",
                    }));
                  }}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 pr-12 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className="mt-2 text-xs text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Login button */}

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-white py-3.5 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Sign In
            </button>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-white transition hover:text-gray-300"
              >
                Create Account
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </main>
  );
}

export default Login;
