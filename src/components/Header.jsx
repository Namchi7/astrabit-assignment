import logo from "../assets/svg/logo.svg";
import userAlt from "../assets/svg/user-alt.svg";
import downArrow from "../assets/svg/down-arrow.svg";

function Header() {
  return (
    <div className="w-full px-[60px] py-[18px] bg-[#FFFFFF] shadow-sm flex flex-row justify-between items-center gap-8">
      <img src={logo} alt="Logo" width={50} height={48} className="w-[50px]" />

      <nav className="flex flex-row justify-end items-center gap-[45px]">
        <div className="text-[#1A1B1E] text-[17px] font-medium hover:cursor-pointer">
          Dashboard
        </div>

        <div className="text-[#1A1B1E] text-[17px] font-medium hover:cursor-pointer">
          FAQs
        </div>

        <div className="text-[#1A1B1E] text-[17px] font-medium hover:cursor-pointer">
          Support
        </div>

        <div className="px-[16px] py-[10px] flex flex-row justify-center items-center gap-0 border-[2px] border-solid border-[#4A4ED4] rounded-[100vw] hover:cursor-pointer">
          <img
            src={userAlt}
            alt="U"
            width={16}
            height={16}
            className="w-[16px]"
          />
          <img
            src={downArrow}
            alt="D"
            width={16}
            height={16}
            className="w-[16px]"
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;
