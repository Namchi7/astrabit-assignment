import pieChart from "../assets/images/pie-chart.png";
import ganttChart from "../assets/images/gantt-chart.png";

function Graphs() {
  return (
    <div className="w-full grid grid-cols-[1fr_2fr] gap-[26px]">
      <div className="bg-white rounded-[5px] flex justify-center items-center shadow-finance-item">
        <img src={pieChart} className="w-full" />
      </div>
      <div className="h-full bg-white rounded-[5px] flex justify-center items-start shadow-finance-item">
        <img src={ganttChart} className="w-full" />
      </div>
    </div>
  );
}

export default Graphs;
