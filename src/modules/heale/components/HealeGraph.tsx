import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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
    Filler,
    Legend
);

const HealeGraph = () => {
    const options = {
        responsive: true,
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
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                fill: "start",
                label: 'Dataset 2',
                data: [25, 44, 35, 42, 25, 17, 33, 43],
                borderColor: 'rgba(52, 70, 238, 1)',
                backgroundColor: 'rgba(52, 70, 238, 0.26',
                lineTension: 0.5,
            },
        ],
    };

    return (
        <Box h={"100%"} w={"100%"}>
            <Line width={500} height={100} options={options} data={data} />
        </Box>);
};

export default HealeGraph;
