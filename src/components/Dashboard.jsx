import Answers from "./Answers";
import Events from "./Events";
import FinanceItems from "./FinanceItems";
import Graphs from "./Graphs";

function Dashboard() {
  return (
    <div className="w-full px-[60px] py-[26px] flex flex-col justify-start items-center gap-[26px]">
      <h1 className="w-full text-left text-[#1a1b1e] text-[1.5rem] font-semibold">
        Welcome, Johan Paul
      </h1>

      <Graphs />

      <div className="w-full grid grid-cols-[2fr_1fr] gap-[26px]">
        <div className="flex flex-col justify-start items-start gap-[26px]">
          <FinanceItems />

          <Answers />
        </div>

        <Events />
      </div>
    </div>
  );
}

export default Dashboard;
