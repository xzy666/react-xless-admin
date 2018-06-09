import React from 'react'

const LineChart = require("react-chartjs").Line;

const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Unfilled',
        fill: false,
        data: [
            543,643,643,643,543,543,64
        ],
    }, {
        label: 'Dashed',
        fill: false,
        borderDash: [5, 5],
        data: [
            543,543,75,435,63,453,643
        ],
    }, {
        label: 'Filled',
        data: [
            111, 222, 333, 333, 444, 444, 221
        ],
        fill: true,
    }]
}
const chartOptions = {
    responsive: true,
    title: {
        display: true,
        text: 'Chart.js Line Chart'
    },
    tooltips: {
        mode: 'index',
        intersect: false,
    },
    hover: {
        mode: 'nearest',
        intersect: true
    }, scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Month'
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Value'
            }
        }]
    }
}
const EchartDash = () => {
    return (
        <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
    )
};

export default EchartDash;