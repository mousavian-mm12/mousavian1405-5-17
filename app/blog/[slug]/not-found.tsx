"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    const starsContainer = document.getElementById("stars");

    if (starsContainer) {
      starsContainer.innerHTML = "";

      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.setProperty("--duration", `${Math.random() * 3 + 1}s`);
        starsContainer.appendChild(star);
      }
    }

    const meteorInterval = setInterval(() => {
      const meteor = document.createElement("div");
      meteor.className = "meteor";
      meteor.style.top = `${Math.random() * 100}%`;
      meteor.style.left = "100%";
      document.body.appendChild(meteor);

      setTimeout(() => meteor.remove(), 2000);
    }, 3000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        document.body.style.background = `hsl(${Math.random() * 360}, 50%, 15%)`;

        setTimeout(() => {
          document.body.style.background = "";
        }, 500);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(meteorInterval);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="bg-gray-900 min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <div id="stars" className="fixed inset-0"></div>

      <div className="error-container relative z-10 text-center">
        <div className="relative space-animation mb-8">
          <svg className="w-32 h-32 mx-auto" viewBox="0 0 100 100">
            <ellipse cx="50" cy="40" rx="30" ry="10" fill="#4F46E5" />
            <circle cx="50" cy="35" r="20" fill="#818CF8" />
            <ellipse cx="50" cy="30" rx="10" ry="5" fill="#C7D2FE" />

            <path
              className="ufo-beam"
              d="M40 40 L30 80 L70 80 L60 40"
              fill="rgba(79,70,229,.2)"
            />
          </svg>
        </div>

        <h1 className="text-8xl font-bold text-white mb-4 space-animation">
          4<span className="inline-block portal">0</span>4
        </h1>

        <p className="text-xl text-blue-200 mb-8">
          Oops! Looks like you've wandered into space!
        </p>

        <div className="space-y-4">
          <a
            href="https://abhirajk.vercel.app"
            className="hidden-link text-blue-400 hover:text-blue-300 transition block"
          >
            ← Find your way back to safety
          </a>

          <div className="relative inline-block space-animation">
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
              alt="Astronaut"
              className="w-24 h-24 rounded-full object-cover border-4 border-white mx-auto astronaut-wave"
            />

            <span className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></span>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
           <Link
              href="/myblog"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition"
              >
              Return Home
           </Link>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 hover:scale-105 transition"
            >
              Go Back
            </button>
          </div>
        </div>

        <div className="mt-8 text-gray-500 cursor-pointer hover:text-gray-400 transition">
          <p className="text-sm">Press 'Space' for a surprise!</p>
        </div>
      </div>
    </main>
  );
}