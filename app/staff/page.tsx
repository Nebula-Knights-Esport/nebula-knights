export default function StaffPage() {
  const staff = [
    {
      alias: "Eros",
      role: "Founder,CEO & Head of CDL Division",
      image: "/founders/eros.png",
    },
    {
      alias: "Psyche",
      role: "Founder,CFO & Head of Female Division",
      image: "/founders/psyche.png",
    },
    {
      alias: "Xylah",
      role: "Founder & CHRO",
      image: "/founders/xylah.png",
    },
    {
      alias: "Fenr",
      role: "Founder,COO & Eagles Captain",
      image: "/founders/fenr.png",
    },
    {
      alias: "Zol",
      role: "Head of Sniper Division & Aces Captain",
      image: "/founders/zol.png",
    },
    {
      alias: "Tazz",
      role: "Coach",
      image: "/founders/tazz.png",
    },
    {
      alias: "Phoenix",
      role: "Galaxia Captain",
      image: "/founders/phoenix.png",
    },
    {
      alias: "MiniNinja",
      role: "Nova Captain",
      image: "/founders/minininja.png",
    },
    {
      alias: "Nomad",
      role: "Stingray Captain",
      image: "/founders/nomad.png",
    },
    {
      alias: "Gatez",
      role: "Ronin Captain",
      image: "/founders/gatez.png",
    },
    {
      alias: "Roosh",
      role: "Helix Captain",
      image: "/founders/roosh.png",
    },
    {
      alias: "Tekkie",
      role: "Ghost Captain",
      image: "/founders/tekkie.png",
    },
    {
      alias: "Slakkie",
      role: "Orion Captain",
      image: "/founders/slakkie.png",
    },
    {
      alias: "Lucifer",
      role: "Phoenix Captain",
      image: "/founders/lucifer.png",
    },
    {
      alias: "RAG3D_ZA",
      role: "Warzone Captain",
      image: "/founders/rag3d.png",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/staff-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
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
            STAFF
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Meet the leadership team driving Nebula Knights Esports forward.
          </p>

        </section>

        {/* STAFF GRID */}
        <section className="max-w-7xl mx-auto px-8 py-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {staff.map((member) => (
              <div
                key={member.alias}
               className="group bg-black/60 backdrop-blur-md border border-purple-500/20 rounded-2xl overflow-hidden hover:border-orange-500/60 hover:scale-105 transition-all duration-300">

                <img
                  src={member.image}
                  alt={member.alias}
                  className="w-full h-80 object-cover scale-90 transition-transform duration-500 group-hover:scale-105"
                />

                <div className="p-5 text-center">

                  <h2
                    className="text-2xl font-bold"
                    style={{
                      background:
                        "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {member.alias}
                  </h2>

                  <p className="text-gray-300 mt-2">
                    {member.role}
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