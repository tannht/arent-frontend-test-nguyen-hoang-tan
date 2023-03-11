import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Tooltip, } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
);
export const options = {
    responsive: true,
};

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

export const data = {
    labels,
    datasets: [
        {
            label: '目標',
            data: [423, 434, 234, 423, 255, 435, 524, 131, 314, 343, 143, 341],
            borderColor: '#FFCC21',
            backgroundColor: 'rgba(255,204,33,0.5)',
        },
        {
            label: '実績',
            data: [123, 342, 452, 566, 543, 453, 425, 452, 425, 452, 232, 545],
            borderColor: '#8FE9D0',
            backgroundColor: 'rgba(143,233,208,0.5)',
        },
    ],
};
export const PercentageGraph = () => {
    return <Line options={ options } data={ data }/>;
};
