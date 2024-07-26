"use client";
import Chart from "@/components/chart";
import { useThemeMode } from "flowbite-react";

export default function MeasurementLineChart() {
  const { mode } = useThemeMode();
  const isDarkTheme = mode === "dark";

  const fillGradientShade = isDarkTheme ? "dark" : "light";
  const fillGradientShadeIntensity = isDarkTheme ? 0.45 : 1;

  const options: ApexCharts.ApexOptions = {
    labels: ["Chest", "Waist", "Hips", "Thighs", "Bicep"],
    chart: {
      fontFamily: "Inter, sans-serif",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: fillGradientShade,
        shadeIntensity: fillGradientShadeIntensity,
      },
    },
    plotOptions: {
      area: {
        fillTo: "end",
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#1A56DB",
      },
    },
    tooltip: {
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
    },
  };
  const series = [
    {
      name: "01/20/2024",
      data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
      color: "#1A56DB",
    },
    {
      name: "01/27/2024",
      data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
      color: "#FDBA8C",
    },
    {
      name: "01/20/2024",
      data: [2234, 2234, 221, 332, 11, 6252, 6000],
      color: "#1A56DB",
    },
    {
      name: "01/27/2024",
      data: [6256, 5725, 4424, 3356, 6786, 8756, 6006],
      color: "#FDBA8C",
    },
  ];

  return <Chart height={305} options={options} series={series} type="area" />;
}
