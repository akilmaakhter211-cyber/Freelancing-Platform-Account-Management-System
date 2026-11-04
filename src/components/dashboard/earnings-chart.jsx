
"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 1800 },
  { month: "Mar", earnings: 1500 },
  { month: "Apr", earnings: 2400 },
  { month: "May", earnings: 2000 },
  { month: "Jun", earnings: 3200 },
  { month: "Jul", earnings: 2800 },
  { month: "Aug", earnings: 4000 },
  { month: "Sep", earnings: 3500 },
  { month: "Oct", earnings: 4500 },
  { month: "Nov", earnings: 3900 },
  { month: "Dec", earnings: 5200 },
];

export default function EarningsChart() {
  return (
    <div className="rounded-2xl border border-gray-700 bg-[#252525] p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Earnings Overview
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          Your monthly income performance
        </p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="earningsColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />

            <XAxis
              dataKey="month"
              stroke="#9ca3af"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#9ca3af"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#18181b",
                border: "1px solid #52525b",
                borderRadius: "10px",
                color: "#fff",
              }}
              formatter={(value) => [`$${value}`, "Earnings"]}
            />

            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#8b5cf6"
              strokeWidth={3}
              fill="url(#earningsColor)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
