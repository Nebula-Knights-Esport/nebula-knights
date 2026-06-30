
export default function TeamsPage() {
  const divisions = [
{
title: "Male CDL",
teams: [
{
  name: "Ronin",
  logo: "/team-logos/ronin.png",
  link: "/teams/ronin",
}
,
{ 
  name: "Stingrays", 
  logo: "/team-logos/stingrays.png",
  link: "/teams/stingrays"
},
{ 
  name: "Eagles", 
  logo: "/team-logos/eagles.png", 
  link: "/teams/eagles" 
},

{ 
  name: "Helix", 
  logo: "/team-logos/helix.png", 
  link: "/teams/helix" 
},
{ 
  name: "Ghost", 
  logo: "/team-logos/ghost.png", 
  link: "/teams/ghost" 
},
],
},
{
title: "Female CDL",
teams: [
{ 
  name: "Galaxia", 
  logo: "/team-logos/galaxia.png",
  link: "/teams/galaxia"
},
{ 
  name: "Orion", 
  logo: "/team-logos/orion.png", 
  link: "/teams/orion" 
},
],
},
{
title: "Male Snipers",
teams: [
{ 
  name: "Aces (Magic)", 
  logo: "/team-logos/aces.png" 
  ,
  link: "/teams/aces"
},
{ name: "Phoenix", 
  logo: "/team-logos/phoenix.png", 
  link: "/teams/phoenix" 
},
{ name: "Omega", 
  logo: "/team-logos/omega.png", 
  link: "/teams/omega" 
},
],
},
{
title: "Female Snipers",
teams: [
{ name: "Nova", 
  logo: "/team-logos/nova.png", 
  link: "/teams/nova" 
},
],
},
{
title: "Warzone",
teams: [
{ name: "Warzone Team", 
  logo: "/team-logos/warzone.png", 
  link: "/teams/warzone" 
},
],
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

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

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
            OUR TEAMS
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Competitive rosters representing Nebula Knights Esports.
          </p>

        </section>

        {/* DIVISIONS */}
        <section className="max-w-7xl mx-auto px-8 pb-24">

          {divisions.map((division) => (
            <div key={division.title} className="mb-20">

              <h2
                className="text-4xl font-black mb-10"
                style={{
                  background:
                    "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {division.title}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {division.teams.map((team) => (

  <div
    key={team.name}
    className="group bg-black/50 backdrop-blur-md border border-purple-500/20 rounded-3xl overflow-hidden hover:border-purple-500/60 hover:-translate-y-2 transition-all duration-300"
  >
<div className="relative h-64 overflow-hidden flex items-center justify-center">

  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20" />

  <div className="absolute h-40 w-40 rounded-full bg-purple-500/20 blur-[80px]" />

  <div className="relative z-10 text-center">

    <img
      src={team.logo}
      alt={team.name}
      className="h-32 w-auto mx-auto object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]"
    />

    <h3
      className="mt-6 text-3xl font-black"
      style={{
        background:
          "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {team.name}
    </h3>

  </div>

</div>

<div className="p-6">

  <p className="text-gray-400 text-center">
    Nebula Knights Esports
  </p>

  <a
  href={team.link}
  className="block text-center mt-6 border border-purple-500 rounded-xl py-3 hover:bg-purple-900/20 transition-all"
>
  View Team
</a>

</div>

  </div>
))}

              </div>

            </div>
          ))}

        </section>

      </div>

    </main>
  );
}