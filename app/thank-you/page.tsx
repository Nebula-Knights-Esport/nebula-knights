
export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/join-bg.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* NEBULA GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <section className="w-full max-w-3xl text-center">

          {/* LOGO */}
          <div className="mb-10 flex justify-center">
            <img
              src="/logo.png"
              alt="Nebula Knights"
              className="h-28 w-auto"
            />
          </div>

          {/* CARD */}
          <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-3xl p-10 md:p-16 shadow-2xl">

            {/* CHECK */}
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-purple-500/50 bg-purple-900/20">

              <span className="text-4xl text-purple-300">
                ✓
              </span>

            </div>

            {/* TITLE */}
            <h1
              className="text-5xl md:text-6xl font-black"
              style={{
                background:
                  "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              APPLICATION RECEIVED
            </h1>

            {/* MESSAGE */}
            <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed">
              Thank you for applying to join the{" "}
              <span className="text-purple-300 font-semibold">
                Nebula Knights
              </span>{" "}
              family.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Our team will review your application and get back to you
              as soon as possible. Keep an eye on your email and Discord
              for a response.
            </p>

            {/* DIVIDER */}
            <div className="my-10 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href="/"
                className="px-8 py-4 rounded-xl border border-purple-500 hover:bg-purple-900/30 transition-all font-bold"
              >
                Return Home
              </a>

              <a
                href="/community"
                className="px-8 py-4 rounded-xl bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600/30 transition-all font-bold"
              >
                Visit Community
              </a>

            </div>

          </div>

          {/* TAGLINE */}
          <p className="mt-8 text-sm tracking-[0.3em] text-gray-500 uppercase">
            Forging Champions. Building Community. Creating Opportunities.
          </p>

        </section>

      </div>

    </main>
  );
}