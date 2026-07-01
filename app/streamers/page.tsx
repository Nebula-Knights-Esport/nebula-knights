export default function StreamersPage() {
  const streamers = [
    {
      name: "LilithsWrath",
      platform: "Twitch",
      image: "/streamers/lilithswrath.png",
      link: "https://twitch.tv/lilithswrath",
    },
    {
      name: "xX_Slay_Xx",
      platform: "Twitch",
      image: "/streamers/slay.png",
      link: "https://www.twitch.tv/xx_slayy_xx",
    },
    {
      name: "MiniNinja",
      platform: "Twitch",
      image: "/streamers/minininja.png",
      link: "https://www.twitch.tv/minininja0g",
    },
    {
      name: "JohnLaw",
      platform: "YouTube",
      image: "/streamers/johnlaw.png",
      link: "https://www.youtube.com/@JohnLawYouTube",
    },
    {
      name: "Roosh",
      platform: "TikTok",
      image: "/streamers/roosh.png",
      link: "https://www.tiktok.com/@roosh.fps",
    },
    {
      name: "GlitchedTeddy",
      platform: "Twitch",
      image: "/streamers/glitchedteddy.png",
      link: "https://www.twitch.tv/glitchedteddyttv",
    },
    {
      name: "Ice",
      platform: "TikTok",
      image: "/streamers/ice.png",
      link: "https://www.tiktok.com/@ice.ihy",
    },
    {
      name: "Bravo-For-Real",
      platform: "TikTok",
      image: "/streamers/bravo-for-real.png",
      link: "https://www.tiktok.com/@bravoforreal",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/streamers-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10">

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
            STREAMERS
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Meet the creators representing Nebula Knights.
          </p>

        </section>

        <section className="max-w-7xl mx-auto px-8 pb-24">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {streamers.map((streamer) => (

              <a
                key={streamer.name}
                href={streamer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  bg-black/50
                  backdrop-blur-md
                  border
                  border-purple-500/20
                  rounded-2xl
                  overflow-hidden
                  hover:border-purple-500/60
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >

                <img
                  src={streamer.image}
                  alt={streamer.name}
                  className="
                    w-full
                    h-auto
                    block
                  "
                />

                <div className="p-6 text-center">

                  <h2
                    className="text-2xl font-bold"
                    style={{
                      background:
                        "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {streamer.name}
                  </h2>

                  <p className="text-purple-300 mt-3">
                    {streamer.platform}
                  </p>

                  <p className="text-gray-500 mt-4">
                    Click to Watch →
                  </p>

                </div>

              </a>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}