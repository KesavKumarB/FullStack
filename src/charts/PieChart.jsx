import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
// eslint-disable-next-line
import {Chart as ChartJS} from 'chart.js/auto';

const PieChart = () => {
  const [clickedLabel, setClickedLabel] = useState(null);
  const [clickedValue, setClickedValue] = useState(null);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  const options = {
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
      <Pie data={data} options={options} />
      {clickedLabel && <p>You clicked on: {clickedLabel} and Data is {clickedValue}</p>}
    </div>
  );
};

export default PieChart;