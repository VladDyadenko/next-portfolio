import Link from "next/link";
import { navLink } from "./Header";
import Social from "./Social";
import ButtonBurgerMenu from "./ButtonBurgerMenu";

const BurgerMenu = ({
  display,
  handelOnCloseMenu,
  hendleBtnMenu,
  active,
  router,
}) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full h-screen transform translate-x-full transition-transform duration-300 ease-in-out z-40 bg-slate-900 py-20 ${
          display ? "translate-x-0" : ""
        }`}
      >
        <div className="absolute top-5 right-5">
          <ButtonBurgerMenu hendleBtnMenu={hendleBtnMenu} active={active} />
        </div>
        <nav>
          <ul className="flex flex-col items-center justify-between gap-4">
            {navLink.map(({ name, path }) => (
              <li key={path}>
                <Link
                  onClick={handelOnCloseMenu}
                  className={` ${
                    router.pathname === path
                      ? "after:scale-100 text-[#d34235]"
                      : "text-white"
                  } relative text-3xl after:transition-transform hover:after:scale-100 after:absolute after:scale-0 after:h-[1px] after:w-full after:left-0 after:-bottom-0 after:bg-white text-center text-white font-medium`}
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Social display={display} />
      </div>
    </>
  );
};

export default BurgerMenu;
