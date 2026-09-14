"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/components/ui/utils";
import { knowledge, tracks } from "@/data/learning-path";

interface TooltipEntry {
  dataKey: string;
  value: number;
  color: string;
}

interface ChartsTooltipProps {
  active?: boolean;
  label?: number;
  payload?: TooltipEntry[];
}

function ChartTooltip({ active, label, payload }: ChartsTooltipProps) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3 shadow-2xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Week {label}
      </p>
      <div className="flex flex-col gap-1.5">
        {payload.map((entry) => {
          const track = tracks.find((t) => t.key === entry.dataKey);
          return (
            <div key={entry.dataKey} className="flex items-center justify-between gap-8 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                {track?.label}
              </span>
              <span className="font-semibold tabular-nums" style={{ color: entry.color }}>
                {entry.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function LearningPathChart({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8",
        className,
      )}
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Knowledge vs. time</h2>
          <p className="text-sm text-muted-foreground">
            Cumulative skill across your first 12 weeks.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {tracks.map((track) => (
            <span
              key={track.key}
              className="flex items-center gap-2 text-xs font-medium text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: track.color }} />
              {track.label}
            </span>
          ))}
        </div>
      </div>
      <div className="h-80 w-full sm:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={knowledge} margin={{ top: 16, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis
              dataKey="week"
              tick={{ fill: "#a1a1aa", fontSize: 12 }}
              stroke="#27272a"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tick={{ fill: "#a1a1aa", fontSize: 12 }}
              stroke="#27272a"
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip
              cursor={{ stroke: "#27272a", strokeWidth: 1 }}
              content={(props) => <ChartTooltip {...(props as unknown as ChartsTooltipProps)} />}
            />
            {tracks.map((track) => (
              <Line
                key={track.key}
                type="monotone"
                dataKey={track.key}
                name={track.label}
                stroke={track.color}
                strokeWidth={2.5}
                dot={{ r: 3, fill: track.color, strokeWidth: 0 }}
                activeDot={{
                  r: 5,
                  fill: track.color,
                  stroke: "#141414",
                  strokeWidth: 2,
                }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground sm:text-left">
        Hover or tap the chart to inspect a week along your path.
      </p>
    </div>
  );
}
