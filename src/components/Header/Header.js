import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Social from "./Social";
import ButtonBurgerMenu from "./ButtonBurgerMenu";

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
  const hendleBtnMenu = () => {
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
        <BurgerMenu
          router={router}
          hendleBtnMenu={hendleBtnMenu}
          active={active}
          display={display}
          handelOnCloseMenu={handelOnCloseMenu}
        />
        <Social display={display} />
        <ButtonBurgerMenu hendleBtnMenu={hendleBtnMenu} active={active} />
      </header>
    </>
  );
};

export default Header;
