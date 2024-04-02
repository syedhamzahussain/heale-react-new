import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const AvailableUSDGraph = () => {
    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                }
            },
        },
    };
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
            {
                label: "",
                data: [25, 44, 35, 42, 25, 17, 33, 43],
                fill: false,
                borderColor: "rgba(52, 70, 238, 1)",
                lineTension: 0.5,
            },
        ],
    };
    return (
        <Box h={"100%"} w={"100%"}>
            <Line data={data} options={options} />
        </Box>
    );
};

export default AvailableUSDGraph;
