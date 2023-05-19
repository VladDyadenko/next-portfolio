import Link from "next/link";
import axios from "axios";
import { FcAndroidOs } from "react-icons/fc";

const Header = () => {


  return (
    <header className=" w-full h-15">
      <nav className="flex items-center justify-start py-1 bg-slate-200">
        <FcAndroidOs className="ml-5 w-7 h-7 fill-white" />
        <div className="flex ml-16 mr-10">
          <Link
            className="text-center text-lg text-red-600 font-medium"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="text-center ml-4 text-lg text-red-600 font-medium"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className="text-center ml-4 text-lg text-red-600 font-medium"
            href={"/portfolio"}
          >
            Portfolio
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
