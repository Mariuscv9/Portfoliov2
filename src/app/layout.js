import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marius Web Developer",
  description:
    "Marius Enache - Web Developer from Bucharest, Romania. Specializing in front-end development, I create engaging and user-friendly websites with a focus on delivering exceptional user experiences. Explore my portfolio and discover my passion for crafting high-quality web solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
