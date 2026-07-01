"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["Teams", "/teams"],
    ["Tournaments", "/tournaments"],
    ["Staff", "/staff"],
    ["Streamers", "/streamers"],
    ["Community", "/community"],
    ["News", "/news"],
  ];

  return (
    <header className="relative border-b border-purple-900/30 bg-black/90 backdrop-blur-md">

      <div className="flex items-center justify-between px-5 md:px-10 py-5">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="Nebula Knights"
            className="h-12 md:h-14 w-auto"
          />

          <div>

            <h2
              className="font-bold text-xl"
              style={{
                background:
                  "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Nebula Knights
            </h2>

            <p className="text-xs tracking-[0.3em] text-gray-400">
              ESPORTS
            </p>

          </div>

        </a>

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-8 text-gray-300">

          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="hover:text-purple-400"
            >
              {name}
            </a>
          ))}

        </nav>

        <div className="flex items-center gap-3">

          {/* JOIN */}
          <a
            href="/join"
            className="
              border
              border-purple-500
              px-4
              md:px-6
              py-3
              rounded-2xl
              hover:bg-purple-900/20
            "
          >
            Join Us
          </a>

          {/* BURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6">

          <div className="flex flex-col gap-5">

            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="text-gray-300"
              >
                {name}
              </a>
            ))}

          </div>

        </div>
      )}

    </header>
  );
}