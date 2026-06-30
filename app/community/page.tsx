export default function CommunityPage() {
  const socials = [
    {
      name: "Discord",
      image: "/socials/discord.png",
      link: "https://discord.gg/fp56mRv3zg",
    },
    {
      name: "TikTok",
      image: "/socials/tiktok.png",
      link: "https://www.tiktok.com/@nebula_knights_esports?_r=1&_t=zs-93tbg3xvtns",
    },
    {
      name: "Instagram",
      image: "/socials/instagram.png",
      link: "https://www.instagram.com/_nebula_knights_?igsh=OW9pMjBzanRoOGl2&utm_source=qr",
    },
    {
      name: "Facebook",
      image: "/socials/facebook.png",
      link: "https://www.facebook.com/share/1JvoGWMbmK/?mibextid=wwXIfr",
    },
    {
      name: "YouTube",
      image: "/socials/youtube.png",
      link: "https://youtube.com/@nebulaknightza?si=drjYPVS2wBeCuamd",
    },
    {
      name: "Twitch",
      image: "/socials/twitch.png",
      link: "https://www.twitch.tv/nebulaknightsesports?sr=a",
    },
    {
      name: "Twitter X",
      image: "/socials/twitter.png",
      link: "https://x.com/_nebula_knights?s=21",
    },
    {
      name: "Link Tree",
      image: "/socials/linktree.png",
      link: "https://linktr.ee/NebulaKnights",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/community-bg.png')",
        }}
      />

      {/* OVERLAY */}
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
            COMMUNITY
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
            Join Nebula Knights across all our social platforms and become part
            of the community.
          </p>

        </section>

        {/* SOCIAL CARDS */}
<section className="max-w-7xl mx-auto px-8 pb-24">

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {socials.map((social) => (

      <a
        key={social.name}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          block
          rounded-2xl
          overflow-hidden
          transform-gpu
        "
      >

        <div
          className="
            relative
            rounded-2xl
            overflow-hidden
            transition-all
            duration-300
            hover:scale-[1.03]
          "
        >

          <img
            src={social.image}
            alt={social.name}
            draggable={false}
            className="
              block
              w-full
              h-auto
              object-contain
              select-none
            "
          />

          {/* DARK HOVER */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              hover:opacity-100
              bg-black/15
              transition-opacity
              duration-300
            "
          />

          {/* BUTTON */}
          <div
            className="
              absolute
              bottom-6
              left-1/2
              -translate-x-1/2
            "
          >
            <div
              className="
                bg-black/70
                backdrop-blur-md
                px-8
                py-3
                rounded-xl
                border
                border-purple-500/40
                text-white
              "
            >
              Open {social.name}
            </div>
          </div>

        </div>

      </a>

    ))}

  </div>

</section>

      </div>

    </main>
  );
}