export default function TournamentPage() {
  const tournaments = [
    {
      title: "Flow State FE",
      image: "/tournaments/tournament1.png",

      // Card click → Social / Tournament Page
      link: "https://www.tiktok.com/@flowstate.fe?is_from_webapp=1&sender_device=pc",

      hosted: false,

      // Join button
      joinLink: "https://forms.gle/YOURFORM",
    },

    {
      title: "Level Up FE League",
      image: "/tournaments/tournament2.png",

      link:
        "https://www.levelupza.co.za/home",

      hosted: false,
    },

  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/tournaments-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

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
            TOURNAMENTS
          </h1>

          <p className="mt-6 text-gray-300">
            Join events, compete and rise.
          </p>

        </section>

        {/* CARDS */}
        <section className="max-w-7xl mx-auto px-8 pb-24">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {tournaments.map((tournament) => (

              <div key={tournament.title}>

                {/* CLICKABLE CARD */}
                <a
                  href={tournament.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block
                    rounded-3xl
                    overflow-hidden
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >

                  <img
                    src={tournament.image}
                    alt={tournament.title}
                    className="
                      block
                      w-full
                      rounded-3xl
                      border
                      border-purple-500/30
                      hover:border-purple-500/70
                    "
                  />

                </a>

                {/* JOIN BUTTON */}
                {tournament.hosted && (

                  <a
                    href={tournament.joinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-5
                      block
                      text-center
                      py-4
                      rounded-xl
                      border
                      border-purple-500
                      bg-black/50
                      hover:bg-purple-900/20
                      transition
                    "
                  >
                    Join Tournament
                  </a>

                )}

              </div>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}