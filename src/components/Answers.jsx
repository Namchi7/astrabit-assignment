import { useRef, useState } from "react";
import rightArrow from "../assets/svg/right-arrow.svg";

function Answers() {
  //   const [step, setStep] = useState(0);
  const answersRef = useRef();

  //   const moveAnswers = (direction) => {
  //     console.log(direction);
  //     const answers = answersRef.current;

  //     setStep((prev) => prev + 33.33 * direction);

  //     answers.style.transform = `translateX(${step}%)`;
  //   };

  return (
    <div className="w-full flex flex-col justify-start items-start gap-[22px]">
      <div className="w-full flex flex-row justify-between items-center gap-8">
        <div className="flex flex-col justify-center items-start gap-[6px]">
          <h2 className="text-[#1A1B1E] text-[24px] font-medium">
            Get Answers
          </h2>
          <h3 className="text-[#1A1B1E] text-[16px] font-bold">
            to all your questions
          </h3>
        </div>

        <div className="grid grid-cols-[24px_24px] gap-4">
          <img
            src={rightArrow}
            alt="<"
            width={24}
            height={24}
            className="size-6 hover:cursor-pointer opacity-40 rotate-180"
            // onClick={() => moveAnswers(1)}
          />
          <img
            src={rightArrow}
            alt=">"
            width={24}
            height={24}
            className="size-6 hover:cursor-pointer"
            // onClick={() => moveAnswers(-1)}
          />
        </div>
      </div>

      <div className="w-full overflow-visible">
        <div
          ref={answersRef}
          className="w-full flex flex-row justify-start items-center gap-[25px]"
        >
          <div className="w-[calc(33%-12.5px)] shrink-0 bg-white rounded-[5px] p-[25px] flex flex-col justify-start items-start gap-3 shadow-finance-item">
            <h3 className="text-[20px] text-[#1A1B1E] font-bold">
              How FDs are taxed
            </h3>

            <p className="w-full text-[14px] text-[#1A1B1E]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <a href="#" className="text-[14px] text-[#3B39D9] underline">
              Read more...
            </a>
          </div>
          <div className="w-[calc(33%-12.5px)] shrink-0 bg-white rounded-[5px] p-[25px] flex flex-col justify-start items-start gap-3 shadow-finance-item">
            <h3 className="text-[20px] text-[#1A1B1E] font-bold">
              How FDs are taxed
            </h3>

            <p className="w-full text-[14px] text-[#1A1B1E]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <a href="#" className="text-[14px] text-[#3B39D9] underline">
              Read more...
            </a>
          </div>
          <div className="w-[calc(33%-12.5px)] shrink-0 bg-white rounded-[5px] p-[25px] flex flex-col justify-start items-start gap-3 shadow-finance-item">
            <h3 className="text-[20px] text-[#1A1B1E] font-bold">
              How FDs are taxed
            </h3>

            <p className="w-full text-[14px] text-[#1A1B1E]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <a href="#" className="text-[14px] text-[#3B39D9] underline">
              Read more...
            </a>
          </div>
          <div className="w-[calc(33%-12.5px)] shrink-0 bg-white rounded-[5px] p-[25px] flex flex-col justify-start items-start gap-3 shadow-finance-item">
            <h3 className="text-[20px] text-[#1A1B1E] font-bold">
              How FDs are taxed
            </h3>

            <p className="w-full text-[14px] text-[#1A1B1E]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <a href="#" className="text-[14px] text-[#3B39D9] underline">
              Read more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answers;
