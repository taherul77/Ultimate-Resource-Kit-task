import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";

import PieChart from "./chart";
import BarChart from "./chart";


Chart.register(CategoryScale);
 
export default function Contribution() {
  const [chartData, setChartData] = useState({
    // ...chart data
  });
 
  return (
    <div className="App">
      <PieChart chartData={chartData} />
      <BarChart chartData={chartData} />
    </div>
  )
}