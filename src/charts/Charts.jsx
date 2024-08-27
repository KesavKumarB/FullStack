import React from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const Charts = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 divide-x mx-auto my-auto sm:p-5 md:p-10">
        <div>
          <PieChart />
        </div>
        <div>
          <BarChart />
        </div>
        <div>
          <LineChart />
        </div>
      </div>
    </>
  );
};

export default Charts;
