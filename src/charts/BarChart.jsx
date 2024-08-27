import React from 'react';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {

    const [clickedLabel, setClickedLabel] = useState(null);
    const [clickedValue, setClickedValue] = useState(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
        const datasetIndex = elements[0].datasetIndex;
        const dataIndex = elements[0].index;
        const label = data.labels[dataIndex];
        const value = data.datasets[datasetIndex].data[dataIndex];

        setClickedLabel(label);
        setClickedValue(value);
        console.log(`Clicked on ${label}: ${value}`);
        alert(`Clicked on ${label}: ${value}`);
      }
    },
  };

  return (
    <div>
        <Bar data={data} options={options} />
        {clickedLabel && <p>You clicked on: {clickedLabel} and Data is {clickedValue}</p>}
    </div>
  );
  
};

export default BarChart;