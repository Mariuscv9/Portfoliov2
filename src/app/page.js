import Header from "../components/Header";
import Tools from "../components/Tools";
import Portfolio from "../components/Portfolio";
import "animate.css";
import "aos/dist/aos.css";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main">
        <About />
        <Tools />
        {/* <Portfolio /> */}
        <footer></footer>
      </div>
    </>
  );
}
