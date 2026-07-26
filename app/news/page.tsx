export default function NewsPage() {
  const news = [
    {
      title: "Annoucement of our fundraiser tournament",
      date: "26 July 2026",
      description:
        "We are hosting three different tournaments in an effort to raise funds for our memeber that is in need of an urgent surgery.",
      image: "/news/news7.png",
    },
    {
      title: "Back a Buddy Fundraiser",
      date: "20 July 2026",
      description:
        "We really want to help our community member who is in need of an urgent surgery. Please support our fundraiser and help us raise funds for this cause. Any help would be greatly appreciated. A share, a donation, or even just spreading the word can make a huge difference.",
      image: "/news/news8.png",
    },
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
        "Galaxia secured second place in the Amateur Division and showed incredible growth and teamwork.",
      image: "/news/news1.png",
    },
    {
      title: "Galaxia trophies at EGL",
      date: "29 June 2026",
      description:
        "Galaxia has won multiple trophies at EGL, showcasing their skill and dedication.",
      image: "/news/news3.png",
    },
    {
      title: "Nebula Knights signed a new team",
      date: "01 July 2026",
      description:
        "Nebula Knights has signed a new team for the upcoming season. Welcome to the family.",
      image: "/news/news4.png",
    },
    {
      title: "Galaxia wins the first game of the Level za League",
      date: "01 July 2026",
      description:
        "Galaxia secured a victory in the first game of the Level za League, demonstrating their competitive spirit and taking the win 3-0 against Siren Eclips.",
      image: "/news/news5.png",
    },
    {
      title: "Warzone team shows of there skills in the Resurgance tournament",
      date: "03 July 2026",
      description:
        "Warzone team demonstrated their prowess in the Resurgance tournament, showcasing their skills and determination.",
      image: "/news/news6.png",
    },
    
  ];

  return (
    <main className="min-h-screen text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/news-bg.png')" }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10">

        {/* HERO */}
        <section className="text-center py-24">
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
            Stay updated with Nebula Knights Esports.
          </p>
        </section>

        {/* CARDS */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {news.map((item) => (
              <div
                key={item.title}
                className="
                  bg-black/50
                  backdrop-blur-md
                  rounded-3xl
                  overflow-hidden
                  border border-purple-500/20
                  hover:border-purple-500/60
                  transition
                  duration-300
                "
              >

                {/* IMAGE FIX (3:4 POSTER RATIO - NO CROPPING) */}
                <div className="w-full aspect-[3/4] bg-black flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <p className="text-cyan-400 text-sm">{item.date}</p>

                  <h2
                    className="mt-3 text-2xl font-bold"
                    style={{
                      background:
                        "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.title}
                  </h2>

                  <p className="mt-4 text-gray-300 text-sm leading-7">
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