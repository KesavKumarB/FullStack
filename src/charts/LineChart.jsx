import React from 'react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line
import {Chart as ChartJS} from 'chart.js/auto';


const LineChart = () => {
    
    const [clickedLabel, setClickedLabel] = useState(null);
    const [clickedValue, setClickedValue] = useState(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const dataIndex = elements[0].index;
        const label = data.labels[dataIndex];
        const value = data.datasets[0].data[dataIndex];

        setClickedLabel(label);
        setClickedValue(value);
        console.log(`Clicked on ${label}: ${value}`);
        alert(`Clicked on ${label}: ${value}`);
      }
    },
  };

  return (
    <div>
        <Line data={data} options={options} />
        {clickedLabel && <p>You clicked on: {clickedLabel} and Data is {clickedValue}</p>}
    </div>

  );
};

export default LineChart;