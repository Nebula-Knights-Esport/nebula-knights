export default function DivinityPage() {
  const players = [
  
    {
      gamertag: "Ice",
      role: "Sniper",
      image: "/players/omega/player1.png",
    },
    {
      gamertag: "GlitchedTeddy",
      role: "Sniper",
      image: "/players/omega/player2.png",
    },
    {
      gamertag: "Send_Noobz",
      role: "Sniper",
      image: "/players/omega/player3.png",
    },
    {
      gamertag: "FrikkieFlash",
      role: "Sniper",
      image: "/players/omega/player4.png",
    },
    {
      gamertag: "Techno",
      role: "Sniper",
      image: "/players/omega/player5.png",
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
            src="/team-logos/omega.png"
            alt="Omega"
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
            OMEGA
          </h1>

          <p className="mt-4 text-gray-300 text-xl">
            Male Snipers Division
          </p>

        </section>

        {/* ABOUT */}
        <section className="max-w-5xl mx-auto px-8 text-center pb-20">

          <h2 className="text-4xl font-bold mb-6">
            About Omega
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Omega represents the gentlemen of the sniper division, With a roster of 6 talented players, each bringing their unique style and precision to the game. 
            Learning from the best, they have honed their skills to become formidable opponents in the competitive scene. 
            With a focus on teamwork and strategy, adding some sassyness and fun.
            Omega is a force to be reckoned with in the world of esports.
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

                  <p className="text-gray-300 mt-2">
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
