import React from 'react';
import { Line } from 'react-chartjs-2';


function Graph({labels}) {


    const BEARISH_CFG = [{ x: 'May 13', open: '141.32'}]
    const BULLISH_CFG = [{ x: 'MAY 13', close: '132.23'}];



    return(
        <div>
            <Line 
            data={{
                labels: ['May 13, 2021', 'May 14, 2021', 'May 15. 2021', 'May 16, 2021', 'May 17, 2021'],
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
