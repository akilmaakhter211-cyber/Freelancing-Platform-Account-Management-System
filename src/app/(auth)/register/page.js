
"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Apple, Check } from "lucide-react";
import Image from "next/image";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (!formData.terms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    alert("Registration form validated successfully!");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090f] px-4 py-8">
      <Image
        src="/images/Neon Freelance Growth Journey.gif"
        alt="Background"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover "
        >    

      </Image>
      {/* Background Decorations */}
      <div className="absolute left-[19%] top-[10%] h-3 w-3 rounded-full bg-violet-500/30" />
      <div className="absolute right-[6%] top-[37%] h-3 w-3 rounded-full bg-violet-600/60" />
      <div className="absolute bottom-[9%] right-[32%] h-3 w-3 rounded-full bg-violet-500/30" />

      <div className="absolute -bottom-[350px] -left-[285px] h-[570px] w-[570px] rounded-full border border-violet-500/10" />

      {/* Main Card */}
      <div className="relative z-10 grid w-full max-w-[800px] grid-cols-1 gap-0 rounded-[22px] border border-violet-500/20 bg-[rgb(23_20_33/0.6)]   p-1 shadow-2xl shadow-violet-950/20 sm:grid-cols-3">

        {/* Left Image Section */}
        <div
          className="relative col-span-1 min-h-[190px] overflow-hidden rounded-t-[17px] bg-cover bg-center sm:min-h-[368px] sm:rounded-l-[17px] sm:rounded-tr-none"
          style={{
            backgroundImage: "url('/images/register-landscape.png')",
          }}
        >
          {/* Image Indicators */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
            <span className="h-[2px] w-[15px] rounded-full bg-white/30" />
            <span className="h-[2px] w-[15px] rounded-full bg-white/30" />
            <span className="h-[2px] w-7 rounded-full bg-white" />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="col-span-1 flex items-center justify-center px-6 py-8 text-white sm:col-span-2 sm:px-[31px] sm:py-6">

          <div className="w-full">

            {/* Heading */}
            <h1 className="mb-2 text-[20px] font-bold text-white sm:text-[26px]">
              Create an account
            </h1>

            <p className="mb-6 text-[11px] text-gray-400 sm:mb-[22px] sm:text-[16px]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-violet-400 underline transition hover:text-violet-300"
              >
                Log in
              </Link>
            </p>

            {/* Registration Form */}
            <form onSubmit={handleSubmit}>

              {/* First Name & Last Name */}
              <div className="mb-2 grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="h-9 min-w-0 rounded border border-[#393044] bg-[#211d2c] px-2 py-2 text-[12px] text-white outline-none placeholder:text-gray-500 focus:border-violet-500 sm:h-[40px] sm:text-[14px]"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="h-9 min-w-0 rounded border border-[#393044] bg-[#211d2c] px-2 py-2 text-[12px] text-white outline-none placeholder:text-gray-500 focus:border-violet-500 sm:h-[40px] sm:text-[14px]"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mb-2 h-9 w-full rounded border border-[#393044] bg-[#211d2c] px-2 py-2 text-[12px] text-white outline-none placeholder:text-gray-500 focus:border-violet-500 sm:h-[40px] sm:text-[14px]"
              />

              {/* Password */}
              <div className="relative mb-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-9 w-full rounded border border-[#393044] bg-[#211d2c] px-2 pr-9 text-[12px] text-white outline-none placeholder:text-gray-500 focus:border-violet-500 sm:h-[40px] sm:text-[14px]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-violet-400"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff size={15} />
                  ) : (
                    <Eye size={15} />
                  )}
                </button>
              </div>

              {/* Terms & Conditions */}
              <label className="mb-5 flex cursor-pointer items-center gap-2 text-[12px] text-gray-300 sm:mb-[21px] sm:text-[14px]">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="peer sr-only"
                />

                <span className="flex h-[12px] w-[12px] items-center justify-center rounded-[2px] border border-gray-500 text-transparent peer-checked:border-violet-500 peer-checked:bg-violet-600 peer-checked:text-white">
                  <Check size={9} />
                </span>

                <span>
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-violet-400 underline hover:text-violet-300"
                  >
                    terms & conditions
                  </Link>
                </span>
              </label>

              {/* Create Account Button */}
              <button
                type="submit"
                className="h-9 w-full cursor-pointer rounded bg-violet-600 text-[11px] font-medium text-white transition hover:bg-violet-500 sm:h-[40px] sm:text-[16px]"
              >
                Create account
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 flex items-center gap-2 sm:my-[17px]">
              <span className="h-px flex-1 bg-[#393044]" />
              <p className="whitespace-nowrap text-[12px] text-gray-400 sm:text-[16px]">
                Or register with
              </p>
              <span className="h-px flex-1 bg-[#393044]" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-2">

              <button
                type="button"
                onClick={() => alert("Google sign-in will be added later.")}
                className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded border border-[#393044] text-[12px] text-gray-200 transition hover:border-violet-500 hover:bg-violet-500/10 sm:h-[40px] sm:text-[16px]"
              >
                <span className="text-[20px] font-bold text-[#4285f4]">
                  G
                </span>
                Google
              </button>

              <button
                type="button"
                onClick={() => alert("Apple sign-in will be added later.")}
                className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded border border-[#393044] text-[12px] text-gray-200 transition hover:border-violet-500 hover:bg-violet-500/10 sm:h-[40px] sm:text-[16px]"
              >
                <Apple size={18} fill="currentColor" />
                Apple
              </button>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
