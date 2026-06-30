"use client";

export default function JoinPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/join-bg.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HERO */}
        <section className="py-24 text-center">

          <h1
            className="text-6xl md:text-7xl font-black"
            style={{
              background:
                "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            JOIN NEBULA KNIGHTS
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
            Ready to join the Nebula Knights family? Complete the application
            below and send it directly to us.
          </p>

        </section>

        {/* FORM */}
        <section className="max-w-4xl mx-auto px-8 pb-24">

          <div className="bg-black/50 backdrop-blur-md border border-purple-500/20 rounded-2xl p-10">

            <form
              action="https://formsubmit.co/nebulaknightsesport@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Redirect after submit */}
              <input
                type="hidden"
                name="_next"
                value="https://yourwebsite.com/thank-you"
              />

              <input
                type="text"
                name="Full Name"
                placeholder="Full Name"
                required
                className="w-full bg-black/40 border border-purple-500/20 rounded-xl p-4"
              />

              <input
                type="text"
                name="Gaming Alias"
                placeholder="Gaming Alias"
                required
                className="w-full bg-black/40 border border-purple-500/20 rounded-xl p-4"
              />

              <input
                type="number"
                name="Age"
                placeholder="Age"
                required
                className="w-full bg-black/40 border border-purple-500/20 rounded-xl p-4"
              />

              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                required
                className="w-full bg-black/40 border border-purple-500/20 rounded-xl p-4"
              />

              <input
                type="text"
                name="Discord"
                placeholder="Discord Username"
                className="w-full bg-black/40 border border-purple-500/20 rounded-xl p-4"
              />

              <select
                name="Applying For"
                required
                className="w-full bg-black/40 border border-purple-500/20 rounded-xl p-4"
              >
                <option value="">Select Position</option>
                <option>Competitive Player</option>
                <option>Streamer</option>
                <option>Coach</option>
                <option>Manager</option>
                <option>Content Creator</option>
                <option>Community Member</option>
              </select>

              <textarea
                name="About"
                rows={6}
                placeholder="Tell us about yourself..."
                required
                className="w-full bg-black/40 border border-purple-500/20 rounded-xl p-4"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl border border-purple-500 hover:bg-purple-900/20 transition-all font-bold"
              >
                Submit Application
              </button>

            </form>

          </div>

        </section>

      </div>

    </main>
  );
}