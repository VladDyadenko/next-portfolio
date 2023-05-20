import Link from "next/link";
import axios from "axios";
import { FcAndroidOs } from "react-icons/fc";
import { AiFillLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const Header = () => {
  const navLink = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <>
      <header className="flex px-4 items-center justify-between w-full h-20 bg-sky-950">
        <FcAndroidOs className=" w-7 h-7 fill-white" />
        <nav className="flex items-center justify-between  gap-4">
          {navLink.map(({ name, path }) => (
            <Link
              key={path}
              className="relative after:transition-transform hover:after:scale-100  after:absolute after:scale-0 after:h-[2px] after:w-full after:left-0 after:-bottom-0 after:bg-white text-center text-lg text-white font-medium "
              href={path}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-start">
          <a
            href=""
            className="flex items-center justify-center text-white hover:scale-105"
          >
            <AiFillLinkedin className="fill-white mr-1" />
            <span>linkedin</span>
          </a>
          <a
            href=""
            className="flex items-center justify-center text-white hover:scale-105"
          >
            <VscGithub className="fill-white mr-1" />
            <span className="">Github</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
