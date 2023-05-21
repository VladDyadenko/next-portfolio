import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Social from "./Social";

export const navLink = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
];

const Header = () => {
  const [active, setActive] = useState(false);
  const [display, setDisplay] = useState(false);
  const router = useRouter();

  const handelOnCloseMenu = () => {
    setActive(!active);
    setDisplay(!display);
  };

  return (
    <>
      <header className="flex px-4 items-center justify-between w-full h-20 bg-slate-900">
        <p className="text-lg text-white">Logo</p>
        <nav className="sm:hidden">
          <ul className="flex items-center justify-between  gap-[40px] ">
            {navLink.map(({ name, path }) => (
              <li key={path}>
                <Link
                  className={`relative ${
                    router.pathname === path
                      ? "after:scale-100 text-[#d34235]"
                      : "text-white"
                  } after:transition-transform hover:after:scale-100 
                   after:absolute after:scale-0 after:h-[1px]
                   after:w-full after:left-0 after:-bottom-0 after:bg-white
                    text-center text-2xl  font-medium`}
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <BurgerMenu display={display} handelOnCloseMenu={handelOnCloseMenu} />
        <Social display={"hidden"} />
        <button
          onClick={() => {
            setActive(!active);
            setDisplay(!display);
          }}
          className={`group hidden sm:block relative h-5 w-[30px] ${
            active ? "active" : ""
          }`}
        >
          <span className=" absolute left-0 group-[.active]:translate-y-2 group-[.active]:rotate-45 top-0 bg-white h-[1px] w-full transition-transform"></span>
          <span className=" absolute left-0 top-1/2 bg-white h-[1px] w-full group-[.active]:opacity-0 transition-opacity"></span>
          <span className=" absolute left-0 bottom-0 bg-white h-[1px] w-full group-[.active]:-translate-y-[11px] group-[.active]:-rotate-45 transition-transform"></span>
        </button>
      </header>
    </>
  );
};

export default Header;
