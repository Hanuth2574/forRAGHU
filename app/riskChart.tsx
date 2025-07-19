"use client"

import { PieChart, Pie, Cell } from "recharts"

const gaugeData = [
  { value: 25, color: "#4CAF50" },  // Green
  { value: 25, color: "#FFC107" },  // Yellow
  { value: 25, color: "#FF5722" },  // Orange
  { value: 25, color: "#F44336" },  // Red
]

const needleValue = 35  // Set the risk level here (0 to 100)

const RiskGauge = () => {
  const radius = 80
  const needleAngle = (needleValue / 100) * 180

  const cx = 100
  const cy = 100
  const length = 70
  const needleX = cx + length * Math.cos((Math.PI * (180 - needleAngle)) / 180)
  const needleY = cy - length * Math.sin((Math.PI * (180 - needleAngle)) / 180)

  return (
    <div className="relative w-[200px] h-[100px] mx-auto">
      <PieChart width={200} height={100}>
        <Pie
          data={gaugeData}
          startAngle={180}
          endAngle={0}
          cx="50%"
          cy="100%"
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
        >
          {gaugeData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      {/* Needle */}
      <svg className="absolute top-0 left-0" width="200" height="100">
        <line
          x1={cx}
          y1={cy}
          x2={needleX}
          y2={needleY}
          stroke="black"
          strokeWidth={3}
        />
        <circle cx={cx} cy={cy} r={5} fill="black" />
      </svg>

      {/* Labels */}
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm text-gray-500">Risk</div>
      </div>
        <div className=" text-center text-md font-bold">High</div>
    </div>
  )
}

export default RiskGauge
