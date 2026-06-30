export default function NebulaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Large Purple Nebula */}
      <div
        className="absolute rounded-full animate-pulse"
        style={{
          width: "900px",
          height: "900px",
          top: "-250px",
          left: "-150px",
          background:
            "radial-gradient(circle, rgba(149, 50, 241, 0.88) 0%, rgba(135, 21, 241, 0.08) 40%, transparent 50%)",
          filter: "blur(120px)",
        }}
      />

      {/* Pink Nebula */}
      <div
        className="absolute animate-pulse"
        style={{
          width: "700px",
          height: "700px",
          top: "100px",
          right: "-150px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(255, 0, 234, 0.73) 0%, rgba(236,72,153,0.05) 45%, transparent 50%)",
          filter: "blur(100px)",
          animationDuration: "8s",
        }}
      />

      {/* Blue Nebula */}
      <div
        className="absolute animate-pulse"
        style={{
          width: "600px",
          height: "600px",
          bottom: "-150px",
          left: "30%",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(22, 110, 253, 0.87) 0%, rgba(15, 179, 230, 0.05) 45%, transparent 50%)",
          filter: "blur(100px)",
          animationDuration: "12s",
        }}
      />

      {/* Energy Core Behind Logo */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(236,72,153,0.10) 45%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Cosmic Dust */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}

      {/* Large Stars */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full animate-pulse"
          style={{
            width: "4px",
            height: "4px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            background: "#fff",
            boxShadow:
              "0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(168,85,247,0.5)",
          }}
        />
      ))}

      {/* Nebula Energy Rings */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "650px",
          height: "650px",
          borderRadius: "9999px",
          border: "1px solid rgba(168,85,247,0.15)",
        }}
      />

      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "800px",
          height: "800px",
          borderRadius: "9999px",
          border: "1px solid rgba(236,72,153,0.08)",
        }}
      />
    </div>
  );
}