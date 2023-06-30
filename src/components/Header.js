import Image from "next/image";
import logo from "/public/logo-no-background.png";

export default function Header() {
  return (
    <header>
      <Image src={logo} alt="logo" width={300} height={85} />
      <nav>
        <ul>
          <li>
            <a href="/">About </a>
          </li>
          <li>
            <a href="/">Tools </a>
          </li>
          <li>
            <a href="/">Portfolio </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
