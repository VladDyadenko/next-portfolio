const ButtonBurgerMenu = ({ hendleBtnMenu, active }) => {
  return (
    <>
      <button
        onClick={hendleBtnMenu}
        className={`group hidden sm:block relative h-5 w-[30px] ${
          active ? "active" : ""
        }`}
      >
        <span className=" absolute left-0 group-[.active]:translate-y-2 group-[.active]:rotate-45 top-0 bg-white h-[1px] w-full transition-transform"></span>
        <span className=" absolute left-0 top-1/2 bg-white h-[1px] w-full group-[.active]:opacity-0 transition-opacity"></span>
        <span className=" absolute left-0 bottom-0 bg-white h-[1px] w-full group-[.active]:-translate-y-[11px] group-[.active]:-rotate-45 transition-transform"></span>
      </button>
    </>
  );
};

export default ButtonBurgerMenu;
