import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOGGY DAYCARE",
  description: "Vår hemsida för hunddagiset Doggy Daycare",
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
