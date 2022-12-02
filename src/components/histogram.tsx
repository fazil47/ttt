import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export interface HistogramProps {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    barPercentage: number;
  }[];
  responsive?: boolean;
}

export default function Histogram({
  title,
  labels,
  datasets,
  responsive = true,
}: HistogramProps) {
  const data: Data = {
    labels,
    datasets,
  };

  const options: Options = {
    responsive,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Bar height={"100%"} width={300} data={data} options={options} />
    </div>
  );
}

export interface Data {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    barPercentage: number;
  }[];
}

export interface Options {
  responsive: boolean;
  plugins: {
    legend: {
      position: "top";
    };
    title: {
      display: boolean;
      text: string;
    };
  };
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
