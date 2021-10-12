import React from 'react';
import { Line } from 'react-chartjs-2';

function Graph({labels}) {

let curr = new Date(); 
let week = []

    for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i 
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
        week.push(day)
    };

const BEARISH_CFG = [{ x: 'May 13', open: '141.32'}]
const BULLISH_CFG = [{ x: 'MAY 13', close: '132.23'}];


    return(
        <div>
            <Line 
            data={{
                labels: week,
                datasets: [{ 
                    label: 'Stock Price',
                    data: [141.45, 144.17, 141.45, 144.17, 141.45, 144.17, 141.45],
                    fill: false,
                    type: 'line',
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgb(75, 192, 192)',
                    tension: 0.2,
                    stack: 'combined',
                    order: 1
                },
                { 
                    label: 'Bearish',
                    data: BEARISH_CFG,
                    fill: false,
                    type: 'bar',
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgb(75, 192, 192)',
                    tension: 0.2,
                    stack: 'combined',
                    order: 2
                },
                { 
                    label: 'Bearish',
                    data: BULLISH_CFG,
                    fill: false,
                    type: 'bar',
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgb(75, 192, 192)',
                    tension: 0.2,
                    stack: 'combined',
                    order: 3
                }
            ]
                
            }}
        
            labels={labels}
            width={300}
	        height={400}
	        options={{
                maintainAspectRatio: false,
                scales: {
                    y: {
                        min: 140,
                        max: 145,
                        beginAtZero: false,
                        stacked: true,
                        }
                    },
                parsing: {
                    yAxisKey: 'open'
                }
            }}
            
            />
        </div>
    )
}

export default Graph;
