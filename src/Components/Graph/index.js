import React  from 'react'
import { Line } from 'react-chartjs-2';

function Graph({labels}) {
    return(
        <div>
            <Line 
            data={{
                labels: ['May 13, 2021'],
                datasets: [{ 
                    label: 'Stock Price',
                    data: [141.45, 144.17, 141.45, 144.17, 141.45, 144.17, 141.45],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.2
                }]
            }}
            labels={labels}
            width={300}
	        height={400}
	        options={{
                maintainAspectRatio: false
            }}
            />
        </div>
    )
}

export default Graph;
