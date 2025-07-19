"use client"

import { Pie, PieChart } from "recharts"
import { MoreHorizontal } from "lucide-react"

interface ThreatActorData {
  name: string
  value: number
  fill: string
}

interface ThreatActorsPieChartProps {
  title?: string
  centerValue?: string
  centerLabel?: string
  data?: ThreatActorData[]
  showMenu?: boolean
}

export default function ThreatActorsPieChart({
  title = "Top 5 threat actors",
  centerValue = "50,904",
  centerLabel = "Post Mentions",
  showMenu = true,
  data = [
    { name: "Lockbit", value: 35, fill: "#e396aa" },
    { name: "Lazarus", value: 25, fill: "#b1e1c4" },
    { name: "Kimsuky", value: 20, fill: "#9bc3f6" },
    { name: "Blackcat", value: 12, fill: "#ecb467" },
    { name: "VoltTyphoon", value: 8, fill: "#7aaff4" },
  ],
}: ThreatActorsPieChartProps) {
  // Create chart config from data
  const chartConfig = data.reduce(
    (config, item) => {
      config[item.name.toLowerCase()] = {
        label: item.name,
        color: item.fill,
      }
      return config
    },
    {} as Record<string, { label: string; color: string }>,
  )

  return (
    <div className="">
      {/* Header */}
      

      {/* Chart Container */}
      <div className="relative flex items-center justify-center">
        <div className="w-[300px] h-[300px]">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx={150}
              cy={150}
              innerRadius={80}
              outerRadius={120}
              strokeWidth={0}
            />
          </PieChart>
        </div>

        {/* Center Text - Perfectly positioned */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{centerValue}</div>
            <div className="text-sm text-gray-600 mt-1">{centerLabel}</div>
          </div>
        </div>
      </div>

      {/* Legend */}
     
    </div>
  )
}
