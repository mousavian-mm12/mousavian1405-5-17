
import React from "react";

export function LoginForm() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-white/40 bg-white/60 p-8 shadow-xl backdrop-blur-xl">
      
      <h1 className="mb-2 text-3xl font-bold text-gray-800">
        Welcome Back
      </h1>

      <p className="mb-8 text-sm text-gray-500">
        Login to your account
      </p>

      <form className="space-y-5">

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-200"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-200"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-purple-500 px-4 py-3 font-medium text-white transition hover:bg-purple-600 active:scale-[0.98]"
        >
          Login
        </button>

      </form>

    </div>
  );
}