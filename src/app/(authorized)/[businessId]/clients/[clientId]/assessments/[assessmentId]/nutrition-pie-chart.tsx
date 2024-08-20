"use client";

import Chart from "@/components/chart";
import { Progress, useThemeMode } from "flowbite-react";

export default function NutritionPieChart() {
  const { mode } = useThemeMode();
  const isDarkTheme = mode === "dark";

  const options: ApexCharts.ApexOptions = {
    labels: ["Proteins", "Fats", "Carbs"],
    colors: ["#16BDCA", "#FDBA8C", "#1A56DB"],
    chart: {
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      colors: [isDarkTheme ? "#111827" : "#fff"],
    },
    plotOptions: {
      pie: {
        donut: {
          size: "5%",
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.9,
        },
      },
    },
    tooltip: {
      shared: true,
      followCursor: false,
      fillSeriesColor: false,
      inverseOrder: true,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
      x: {
        show: true,
        formatter: function (_, { seriesIndex, w }) {
          const label = w.config.labels[seriesIndex];
          return label;
        },
      },
      y: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };
  const series = [30, 24, 18];

  return (
    <>
      <Chart height={305} options={options} series={series} type="donut" />
      <div className="flex flex-col gap-2">
        <div className="text-base font-medium text-teal-700">Proteins</div>
        <Progress progress={45} color="teal" />
        <div className="text-base font-medium text-yellow-700">Fats</div>
        <Progress progress={75} color="yellow" />
        <div className="text-base font-medium text-cyan-700">Carbs</div>
        <Progress progress={25} color="cyan" />
      </div>
    </>
  );
}
