export default function DivinityPage() {
  const players = [
    {
      gamertag: "Nomad",
      role: "Flex",
      image: "/players/stingrays/player1.png",
    },
    {
      gamertag: "Symph",
      role: "Flex",
      image: "/players/stingrays/player2.png",
    },
    {
      gamertag: "Sneezy",
      role: "Flex",
      image: "/players/stingrays/player3.png",
    },
    {
      gamertag: "Bravo-For-Real",
      role: "Slayer",
      image: "/players/stingrays/player4.png",
    },
    {
      gamertag: "Cyrus",
      role: "Slayer",
      image: "/players/stingrays/player4.png",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/teams-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10">

        {/* TEAM HERO */}
        <section className="py-24 text-center">

          <img
            src="/team-logos/stingrays.png"
            alt="Stingrays"
            className="h-48 mx-auto object-contain"
          />

          <h1
            className="mt-8 text-6xl md:text-7xl font-black"
            style={{
              background:
                "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            STINGRAYS
          </h1>

          <p className="mt-4 text-gray-300 text-xl">
            Male CDL Division
          </p>

        </section>

        {/* ABOUT */}
        <section className="max-w-5xl mx-auto px-8 text-center pb-20">

          <h2 className="text-4xl font-bold mb-6">
            About Stingrays
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Stingrays is one of the higher-ranked teams in competitive Call of Duty
            within Nebula Knights Esports. Built on teamwork, discipline and
            excellence, Stingrays always work to improve and become better every day.
          </p>

        </section>

        {/* PLAYERS */}
        <section className="max-w-7xl mx-auto px-8 pb-24">

          <h2 className="text-4xl font-bold text-center mb-12">
            Roster
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {players.map((player) => (
              <div
                key={player.gamertag}
                className="group bg-black/50 backdrop-blur-md border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/60 hover:scale-105 transition-all duration-300"
              >

                <img
                  src={player.image}
                  alt={player.gamertag}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6 text-center">

                  <h3
                    className="text-2xl font-bold"
                    style={{
                      background:
                        "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {player.gamertag}
                  </h3>

                  <p className="text-purple-300 mt-2">
                    {player.role}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}
