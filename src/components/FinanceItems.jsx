import utkarsh from "../assets/images/utkarsh.png";
import bajaj from "../assets/images/bajaj.png";
import shriram from "../assets/images/shriram.png";
import mahindra from "../assets/images/mahindra.png";
import checkPurple from "../assets/svg/circle-check-purple.svg";
import checkBlue from "../assets/svg/circle-check-blue.svg";
import checkBlack from "../assets/svg/circle-check-black.svg";
import checkRed from "../assets/svg/circle-check-red.svg";

function FinanceItems() {
  return (
    <div className="w-full grid grid-cols-[1fr_1fr] gap-[26px]">
      <div className="flex flex-col justify-start items-start gap-0 bg-[#F8F0FF] border border-solid border-white rounded-[5px] shadow-finance-item px-[22px] py-[20px]">
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <img
            src={utkarsh}
            alt="logo"
            width={48}
            height={48}
            className="size-12 mix-blend-multiply"
          />

          <p className="text-[1rem] text-black font-bold ">
            Utkarsh Small Finance Bank
          </p>
        </div>

        <div className="w-full flex flex-row flex-wrap justify-start items-center gap-[10px] mt-[14px]">
          <div className="flex flex-row justify-start items-center gap-[6px] px-[8px] py-[8px] bg-[#EFDDFF] rounded-[5px]">
            <img
              src={checkPurple}
              alt="Check"
              width={16}
              height={16}
              className="size-4"
            />

            <p className="text-black text-[14px] whitespace-nowrap">
              Highest Interest Rate
            </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-[6px] px-[8px] py-[8px] bg-[#EFDDFF] rounded-[5px]">
            <img
              src={checkPurple}
              alt="Check"
              width={16}
              height={16}
              className="size-4"
            />

            <p className="text-black text-[14px] whitespace-nowrap">
              RBI Insured
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center gap-[10px] mt-[20px]">
          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="text-[14px] text-[#1A1B1E] opacity-60 font-medium">
              Interest Upto
            </p>
            <p className="text-[14px] text-[#1A1B1E] font-bold">9.10% p.a.</p>
          </div>

          <button className="h-full bg-[#520B8D] rounded-[5px] shadow-book-now px-[30px] py-[11px] text-[1rem] text-white font-medium">
            Book Now
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-0 bg-[#EFF6FF] border border-solid border-white rounded-[5px] shadow-finance-item px-[22px] py-[20px]">
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <img
            src={bajaj}
            alt="logo"
            width={48}
            height={48}
            className="size-12 mix-blend-multiply"
          />

          <p className="text-[1rem] text-black font-bold ">Bajaj Finserv</p>
        </div>

        <div className="w-full flex flex-row flex-wrap justify-start items-center gap-[10px] mt-[14px]">
          <div className="flex flex-row justify-start items-center gap-[6px] px-[8px] py-[8px] bg-[#0072BB1a] rounded-[5px]">
            <img
              src={checkBlue}
              alt="Check"
              width={16}
              height={16}
              className="size-4"
            />

            <p className="text-black text-[14px] whitespace-nowrap">
              Crisil AAA Rated
            </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-[6px] px-[8px] py-[8px] bg-[#0072BB1a] rounded-[5px]">
            <img
              src={checkBlue}
              alt="Check"
              width={16}
              height={16}
              className="size-4"
            />

            <p className="text-black text-[14px] whitespace-nowrap">
              No Video KYC required
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center gap-[10px] mt-[20px]">
          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="text-[14px] text-[#1A1B1E] opacity-60 font-medium">
              Interest Upto
            </p>
            <p className="text-[14px] text-[#1A1B1E] font-bold">8.80% p.a.</p>
          </div>

          <button className="h-full bg-[#0072BB] rounded-[5px] shadow-book-now px-[30px] py-[11px] text-[1rem] text-white font-medium">
            Book Now
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-0 bg-[#F4F4F4] border border-solid border-white rounded-[5px] shadow-finance-item px-[22px] py-[20px]">
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <img
            src={shriram}
            alt="logo"
            width={48}
            height={48}
            className="size-12 "
          />

          <p className="text-[1rem] text-black font-bold ">Shriram Finance</p>
        </div>

        <div className="w-full flex flex-row flex-wrap justify-start items-center gap-[10px] mt-[14px]">
          <div className="flex flex-row justify-start items-center gap-[6px] px-[8px] py-[8px] bg-[#1A1B1E1a] rounded-[5px]">
            <img
              src={checkBlack}
              alt="Check"
              width={16}
              height={16}
              className="size-4"
            />

            <p className="text-black text-[14px] whitespace-nowrap">
              Crisil AAA Rated
            </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-[6px] px-[8px] py-[8px] bg-[#1A1B1E1a] rounded-[5px]">
            <img
              src={checkBlack}
              alt="Check"
              width={16}
              height={16}
              className="size-4"
            />

            <p className="text-black text-[14px] whitespace-nowrap">
              No Video KYC required
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center gap-[10px] mt-[20px]">
          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="text-[14px] text-[#1A1B1E] opacity-60 font-medium">
              Interest Upto
            </p>
            <p className="text-[14px] text-[#1A1B1E] font-bold">8.80% p.a.</p>
          </div>

          <button className="h-full bg-[#010101] rounded-[5px] shadow-book-now px-[30px] py-[11px] text-[1rem] text-white font-medium">
            Book Now
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-0 bg-[#FFEFEF] border border-solid border-white rounded-[5px] shadow-finance-item px-[22px] py-[20px]">
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <img
            src={mahindra}
            alt="logo"
            width={48}
            height={48}
            className="size-12 mix-blend-multiply"
          />

          <p className="text-[1rem] text-black font-bold ">Mahindra Finance</p>
        </div>

        <div className="w-full flex flex-row flex-wrap justify-start items-center gap-[10px] mt-[14px]">
          <div className="flex flex-row justify-start items-center gap-[6px] px-[8px] py-[8px] bg-[#FF00001a] rounded-[5px]">
            <img
              src={checkRed}
              alt="Check"
              width={16}
              height={16}
              className="size-4"
            />

            <p className="text-black text-[14px] whitespace-nowrap">
              Crisil AAA Rated
            </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-[6px] px-[8px] py-[8px] bg-[#FF00001a] rounded-[5px]">
            <img
              src={checkRed}
              alt="Check"
              width={16}
              height={16}
              className="size-4"
            />

            <p className="text-black text-[14px] whitespace-nowrap">
              No Video KYC required
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center gap-[10px] mt-[20px]">
          <div className="flex flex-col justify-start items-start gap-[8px]">
            <p className="text-[14px] text-[#1A1B1E] opacity-60 font-medium">
              Interest Upto
            </p>
            <p className="text-[14px] text-[#1A1B1E] font-bold">8.80% p.a.</p>
          </div>

          <button className="h-full bg-[#FF0000] rounded-[5px] shadow-book-now px-[30px] py-[11px] text-[1rem] text-white font-medium">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinanceItems;
