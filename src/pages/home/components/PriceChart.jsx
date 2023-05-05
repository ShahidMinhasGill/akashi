import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { date: "4-24", price: 50},
  { date: "4-25", price: 20 },
  { date: "4-26", price: 50 },

];

function PriceChart() {
  return (
    <div className="chart-container">
      <LineChart width={600} height={400} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="4" vertical={false} />
        <Tooltip />
        {/* <Legend /> */}
        {/* <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
}

export default PriceChart;
