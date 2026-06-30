export default function DivinityPage() {
  const players = [
    {
      gamertag: "(C) Fenr",
      role: "AR Main",
      image: "/players/eagles/player1.png",
    },
    {
      gamertag: "Eros",
      role: "Flex",
      image: "/players/eagles/player2.png",
    },
    {
      gamertag: "Zol",
      role: "SMG slayer",
      image: "/players/eagles/player3.png",
    },
    {
      gamertag: "Mr Koi",
      role: "SMG main",
      image: "/players/eagles/player4.png",
    },
     {
      gamertag: "Doozie",
      role: "SMG main",
      image: "/players/eagles/player5.png",
    },
     {
      gamertag: "xNoobyZz",
      role: "SMG main",
      image: "/players/eagles/player6.png",
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
            src="/team-logos/eagles.png"
            alt="Eagles"
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
            EAGLES
          </h1>

          <p className="mt-4 text-gray-300 text-xl">
            Male CDL Division
          </p>

        </section>

        {/* ABOUT */}
        <section className="max-w-5xl mx-auto px-8 text-center pb-20">

          <h2 className="text-4xl font-bold mb-6">
            About Eagles
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Eagles represents the first male team of competitive Call of Duty
            within Nebula Knights Esports. Built on teamwork, discipline and
            excellence,"No Mission Too Difficult. No Sacrifice Too Great."
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
