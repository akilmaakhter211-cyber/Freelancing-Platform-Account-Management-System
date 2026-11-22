
import Link from "next/link";
import {
  LayoutDashboard,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090f] px-5 py-12 text-white">

      <div className="w-full max-w-md">

        {/* Logo */}
        <Link href="/" className="mb-10 flex items-center justify-center gap-2">
          <div className="rounded-xl bg-violet-600 p-2">
            <LayoutDashboard size={23} />
          </div>

          <span className="text-2xl font-bold">
            Freelance<span className="text-violet-400">Hub</span>
          </span>
        </Link>

        {/* Login Card */}
        <div className="rounded-3xl border border-gray-800 bg-[#14141d] p-7 shadow-2xl sm:p-9">

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">
              Welcome Back!
            </h1>

            <p className="mt-3 text-sm text-gray-400">
              Login to manage your freelance workspace.
            </p>
          </div>

          <form className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-gray-700 bg-[#09090f] py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-violet-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-gray-700 bg-[#09090f] py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-violet-500"
                />
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-violet-600" />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-violet-400 hover:text-violet-300"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 font-semibold transition hover:bg-violet-700"
            >
              Login to Account
              <ArrowRight size={18} />
            </button>

          </form>

          {/* Register Link */}
          <p className="mt-7 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-violet-400 hover:text-violet-300"
            >
              Create Account
            </Link>
          </p>

        </div>

        <Link
          href="/"
          className="mt-7 block text-center text-sm text-gray-500 hover:text-violet-400"
        >
          ← Back to Home
        </Link>

      </div>
    </main>
  );
}
