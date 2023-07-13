import Header from "../components/Header";
import Tools from "../components/Tools";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import "animate.css";
import "aos/dist/aos.css";
import About from "../components/About";
import { Kanit, Press_Start_2P } from "@next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const pressstart2p = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <Header className={kanit.className} />
      <main className={kanit.className}>
        <About pressstart2p={pressstart2p.className} />
        <Tools pressstart2p={pressstart2p.className} />
        <Portfolio pressstart2p={pressstart2p.className} />
        <Footer pressstart2p={pressstart2p.className} />
      </main>
    </>
  );
}
