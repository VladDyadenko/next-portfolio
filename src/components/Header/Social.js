import { AiFillLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const Social = ({ display }) => {
  return (
    <>
      <ul
        className={`items-center flex-col sm:${display} ${
          display === "flex"
            ? "mt-10  justify-center gap-3"
            : "flex  justify-start "
        }`}
      >
        <li>
          <a
            href="#"
            className={`${
              display === "flex" && ""
            } flex items-center justify-start text-xl text-white hover:scale-105`}
          >
            <AiFillLinkedin className="fill-white mr-2" />
            <span>linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${
              display === "flex" && "text-3xl"
            } flex items-center justify-start text-xl text-white hover:scale-105`}
          >
            <VscGithub className="fill-white mr-2" />
            <span className="">Github</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Social;
