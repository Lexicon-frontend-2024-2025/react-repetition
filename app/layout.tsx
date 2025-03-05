import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOGGY DAYCARE",
  description: "Vår hemsida för hunddagiset Doggy Daycare",
  openGraph: {
    title: "Välkommen till Doggy Daycare",
    description: "Upptäck vårt hunddagis",
    images: [
      {
        url: "/cooldog.png",
        width: 800,
        height: 500,
        alt: "hund med solglasögon"
      }
    ],
    type: "website"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
