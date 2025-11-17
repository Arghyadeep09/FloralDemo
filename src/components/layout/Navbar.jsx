
const Navbar = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1728px] w-full mx-auto flex justify-between pt-[57px] pl-[39px] items-center px-10">
        <div className="flex  items-center gap-2">
          <img
            src="/images/logoPlant.png"
            alt="logo"
            className=" h-12 w-12"
          ></img>
          <h2 className="text-[28px] font-bold text-[#FFFFFF]">FloraVision.</h2>
        </div>

        <div className=" ">
          <ul className=" flex gap-[71px] text-[#FFFFFF]">
            <li
              className=" text-2xl font-normal font-['Indie_Flower']"
            >
              Home
            </li>
            <li
              className=" text-2xl font-normal font-['Indie_Flower']"
            >
              Plants Type <span> </span>
            </li>
            <li
              className=" text-2xl font-normal font-['Indie_Flower']"
            >
              More
            </li>
            <li
              className=" text-2xl font-normal font-['Indie_Flower']"
            >
              Contact
            </li>
          </ul>
        </div>

        <div className="flex gap-[59px] items-center">
          <img
            src="/images/searchicon.svg"
            alt="search icon"
            className="w-[26px] h-[26px]"
          ></img>
          <img
            src="/images/bagicon.svg"
            alt="bag icon"
            className="w-[26px] h-[26px]"
          ></img>
          <button></button> /* need to complete */
        </div>
      </div>
    </div>
  );
};

export default Navbar;
