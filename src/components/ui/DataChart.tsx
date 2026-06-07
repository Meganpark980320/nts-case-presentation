'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', volume: 4200, transactions: 120 },
  { month: 'Feb', volume: 3800, transactions: 98 },
  { month: 'Mar', volume: 6100, transactions: 187 },
  { month: 'Apr', volume: 8900, transactions: 245 },
  { month: 'May', volume: 7200, transactions: 198 },
  { month: 'Jun', volume: 11500, transactions: 312 },
  { month: 'Jul', volume: 9800, transactions: 278 },
  { month: 'Aug', volume: 14200, transactions: 389 },
  { month: 'Sep', volume: 12100, transactions: 345 },
  { month: 'Oct', volume: 8900, transactions: 256 },
  { month: 'Nov', volume: 15600, transactions: 423 },
  { month: 'Dec', volume: 18900, transactions: 512 },
];

export default function DataChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis
            dataKey="month"
            stroke="#4b5563"
            fontSize={12}
            tickLine={false}
          />
          <YAxis
            stroke="#4b5563"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              fontSize: '12px',
            }}
            labelStyle={{ color: '#9ca3af' }}
            itemStyle={{ color: '#60a5fa' }}
          />
          <Area
            type="monotone"
            dataKey="volume"
            stroke="#60a5fa"
            fillOpacity={1}
            fill="url(#colorVolume)"
            strokeWidth={2}
            name="거래량 (ETH)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
