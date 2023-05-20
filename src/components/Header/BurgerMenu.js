import Link from "next/link";
import { navLink } from "./Header";
import Social from "./Social";

const BurgerMenu = ({ display, handelOnCloseMenu }) => {
  return (
    <>
      <div
        className={`${
          display
            ? "fixed top-0 left-0 right-0 bottom-0 bg-slate-900 py-20"
            : "hidden"
        } `}
      >
        <nav className="">
          <ul className="flex flex-col items-center justify-between  gap-4 ">
            {navLink.map(({ name, path }) => (
              <li key={path}>
                <Link
                  onClick={handelOnCloseMenu}
                  className={
                    "relative text-3xl after:transition-transform hover:after:scale-100  after:absolute after:scale-0 after:h-[1px] after:w-full after:left-0 after:-bottom-0 after:bg-white text-center  text-white font-medium"
                  }
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Social display={"flex"} />
      </div>
    </>
  );
};

export default BurgerMenu;
