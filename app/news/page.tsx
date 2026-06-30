export default function NewsPage() {
  const news = [
    {
      title: "Launching our new Website",
      date: "01 July 2026",
      description:
        "Nebula Knights has launched its new website, featuring updated information and a refreshed design.",
      image: "/news/news2.png",
    },
    {
      title: "Galaxia Take 2nd Place at EGL",
      date: "21 June 2026",
      description:
        "Galaxia secured second place in the Amateur Division and showed incredible growth and teamwork throughout the competition.",
      image: "/news/news1.png",
    },
    {
      title: "Galaxia trophies at EGL",
      date: "29 June 2026",
      description:
        "Galaxia has won 5 trophies at EGL, showcasing their skill and dedication to the game. One trophy is for 2nd place in the Amateur Division, while the other four are for 1st place in various competitions.",
      image: "/news/news3.png",
    },
    {
      title: "Nebula Knights signed a new team",
      date: "01 July 2026",
      description:
        "Nebula Knights has signed a new team to join their roster for the upcoming season. We welcome them to the Nebula Knights family and look forward to seeing their performance in the upcoming competitions.",
      image: "/news/news4.png",
    },


  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/news-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/75" />

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
            NEWS
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Stay updated with everything happening at Nebula Knights Esports.
          </p>

        </section>

        {/* NEWS CARDS */}
        <section className="max-w-7xl mx-auto px-8 pb-24">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {news.map((item) => (

              <div
                key={item.title}
                className="
                  bg-black/50
                  backdrop-blur-md
                  rounded-3xl
                  overflow-hidden
                  border
                  border-purple-500/20
                  hover:border-purple-500/60
                  transition-all
                  duration-300
                "
              >

                {/* IMAGE */}
                <div className="relative">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-[260px]
                      object-cover
                      object-center
                      block
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <p className="text-cyan-400 text-sm">
                    {item.date}
                  </p>

                  <h2
                    className="mt-3 text-3xl font-bold"
                    style={{
                      background:
                        "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.title}
                  </h2>

                  <p className="mt-6 text-gray-300 leading-8">
                    {item.description}
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