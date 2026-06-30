export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 py-6 border-b border-purple-900/30">

      <div className="flex items-center gap-3">

        <img
          src="/logo.png"
          alt="Nebula Knights"
          className="h-14 w-auto"
        />

        <div>
          <h2
            className="font-bold text-lg"
            style={{
              background:
                "linear-gradient(90deg, #38bdf8, #8b5cf6, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Nebula Knights
          </h2>

          <p className="text-xs text-gray-400 tracking-widest">
            ESPORTS
          </p>
        </div>

      </div>

      <nav className="hidden md:flex gap-8 text-sm text-gray-300">

        <a href="/" className="hover:text-purple-400 transition-colors">
          Home
        </a>

        <a href="/teams" className="hover:text-purple-400 transition-colors">
          Teams
        </a>

        <a href="/tournaments" className="hover:text-purple-400 transition-colors">
          Tournaments
        </a>

        <a href="/staff" className="hover:text-purple-400 transition-colors">
          Staff
        </a>

        <a href="/streamers" className="hover:text-purple-400 transition-colors">
          Streamers
        </a>

        <a href="/community" className="hover:text-purple-400 transition-colors">
          Community
        </a>

        <a href="/news" className="hover:text-purple-400 transition-colors">
          News
        </a>

      </nav>

      <a
        href="/join"
        className="border border-purple-500 hover:bg-purple-900/20 px-6 py-3 rounded-xl transition-all"
      >
        Join Us
      </a>

    </header>
  );
}