import NebulaBackground from "../components/NebulaBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">


      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* Cosmic Background */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-10 left-20 h-96 w-96 rounded-full bg-purple-600/15 blur-[180px]" />

          <div className="absolute bottom-20 right-20 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[200px]" />

          <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

        </div>
        <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/nebula-bg.jpg')",
  }}
/>

<div className="absolute inset-0 bg-black/40" />

        {/* Nebula Glow Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-pink-600/20 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 h-60 w-60 rounded-full bg-blue-500/15 blur-3xl"></div>
        </div>

        <div className="relative z-10">

    <div className="relative flex justify-center mb-10">

  {/* Purple Glow */}
  <div className="absolute h-[500px] w-[500px] rounded-full bg-purple-700/30 blur-[140px]"></div>

  {/* Pink Glow */}
  <div className="absolute h-[350px] w-[350px] rounded-full bg-pink-500/20 blur-[120px]"></div>

  {/* Blue Glow */}
  <div className="absolute h-[250px] w-[250px] rounded-full bg-blue-500/20 blur-[100px]"></div>

  <img
    src="/logo.png"
    alt="Nebula Knights"
    className="relative z-10 h-[320px] md:h-[420px] w-auto drop-shadow-[0_0_60px_rgba(168,85,247,0.9)]"
  />

</div>

    {/* HERO TITLE */}

<h1
  className="text-6xl md:text-8xl font-black tracking-wider text-center"
  style={{
    background:
      "linear-gradient(90deg, #38bdf8 0%, #8b5cf6 50%, #ec4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 40px rgba(139,92,246,0.35)",
  }}
>
  NEBULA KNIGHTS
</h1>

<h2
  className="text-2xl md:text-4xl font-bold tracking-[0.4em] text-center mt-4"
  style={{
    background:
      "linear-gradient(90deg, #38bdf8 0%, #8b5cf6 50%, #ec4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  ESPORTS
</h2>

<p
  className="mt-10 text-xl md:text-2xl font-semibold text-center"
  style={{
    color: "#ffffff",
    textShadow: "0 0 20px rgba(0,0,0,0.9)",
  }}
>
  Forging Champions. Building Community. Creating Opportunities.
</p>

<p
  className="mt-4 max-w-3xl mx-auto text-center text-lg"
  style={{
    color: "#d1d5db",
    textShadow: "0 0 15px rgba(0,0,0,0.8)",
  }}
>
  A professional esports organization dedicated to developing talent,
  empowering creators, and building a legacy among the stars.
</p>

  </div>

{/* LEADERSHIP */}
<div className="relative z-10 max-w-7xl mx-auto px-10 py-24">


  {/* Extra Nebula Glow */}

  <div className="relative z-10 max-w-7xl mx-auto px-10">

    <h2
  className="text-5xl font-black text-center mb-12"
  style={{
    background:
      "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    filter: "drop-shadow(0 0 20px rgba(139,92,246,0.5))",
  }}
>
  Leadership Team
</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* EROS */}
    <div className="group bg-black/60 backdrop-blur-md border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/60 hover:scale-105 transition-all duration-300">

      <img
        src="/founders/eros.png"
        alt="Eros"
        className="w-full h-80 object-cover"
      />

      <div className="p-5 text-center">

        <h3
          className="text-2xl font-bold"
          style={{
            background:
              "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          EROS
        </h3>

        <p className="text-gray-300 mt-2">
          Founder & CEO
        </p>


      </div>

    </div>

    {/* PSYCHE */}
    <div className="group bg-black/60 backdrop-blur-md border border-purple-500/20 rounded-2xl overflow-hidden hover:border-pink-500/60 hover:scale-105 transition-all duration-300">

      <img
        src="/founders/psyche.png"
        alt="Psyche"
        className="w-full h-80 object-cover"
      />

      <div className="p-5 text-center">

        <h3
          className="text-2xl font-bold"
          style={{
            background:
              "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          PSYCHE
        </h3>

        <p className="text-gray-300 mt-2">
          Founder & CFO
        </p>

      </div>

    </div>

    {/* XYLAH */}
<div className="group bg-black/60 backdrop-blur-md border border-purple-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/60 hover:scale-105 transition-all duration-300">

  <img
    src="/founders/xylah.png"
    alt="Xylah"
    className="w-full h-80 object-cover"
  />

  <div className="p-5 text-center">

    <h3
      className="text-2xl font-bold"
      style={{
        background:
          "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      XYLAH
    </h3>

    <p className="text-gray-300 mt-2">
      Founder & CHRO
    </p>


  </div>

</div>

{/* FENR */}
<div className="group bg-black/60 backdrop-blur-md border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/60 hover:scale-105 transition-all duration-300">

  <img
    src="/founders/fenr.png"
    alt="Fenr"
    className="w-full h-80 object-cover"
  />

  <div className="p-5 text-center">

    <h3
      className="text-2xl font-bold"
      style={{
        background:
          "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      FENR
    </h3>

    <p className="text-gray-300 mt-2">
      Founder & COO
    </p>



  </div>

</div>

    </div>

  </div>
</div>
{/* WHY NEBULA KNIGHTS */}
<section className="relative z-10 max-w-7xl mx-auto px-10 py-24">

  <h2
    className="text-5xl font-black text-center mb-16"
    style={{
      background:
        "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Why Nebula Knights
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {[
      {
        image: "/homecards/teams.png",
        link: "/teams",
      },
      {
        image: "/homecards/community.png",
        link: "/community",
      },
      {
        image: "/homecards/streamers.png",
        link: "/streamers",
      },
      {
        image: "/homecards/join.png",
        link: "/join",
      },
    ].map((card, index) => (

      <a
        key={index}
        href={card.link}
        className="
          group
          block
          overflow-hidden
          rounded-2xl
          hover:scale-105
          transition-all
          duration-300
        "
        style={{
          textDecoration: "none",
          lineHeight: 0,
        }}
      >

        <img
          src={card.image}
          className="
            block
            w-full
            h-auto
            rounded-2xl
          "
          alt=""
          draggable={false}
        />

      </a>

    ))}

  </div>

</section>

</section>
    </main>
  );
}