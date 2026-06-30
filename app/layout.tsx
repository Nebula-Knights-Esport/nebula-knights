import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nebula Knights Esports",

  description:
    "Forging Champions. Building Community. Creating Opportunities.",

  icons: {
    icon: "/logo.png",
  },

  openGraph: {
    title: "Nebula Knights Esports",

    description:
      "Forging Champions. Building Community. Creating Opportunities.",

    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Nebula Knights Esports",

    description:
      "Forging Champions. Building Community.",

    images: ["/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="bg-[#050505] text-white overflow-x-hidden">

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}