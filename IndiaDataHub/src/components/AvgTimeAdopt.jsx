import React from 'react'
import {Bar} from "react-chartjs-2"
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import "./Home.css"

Chart.register(CategoryScale);
export const AvgTimeAdopt = () => {
    const data={
        type:'horizontalBar',
        labels:['0-1 Puppy','2-6 Adult','7+ Senior'],
        datasets:[ 
            {
                barThickness: 13,
                label:'Avg Time to Adopt over Time',
                data:[30,85,103],
                fill:true,
                backgroundColor:'rgb(100, 229, 247)',
                borderColor: 'rgb(6, 179, 202)'
            }
        ]
    }
    
  return (
    <div className='graph'>

    <Bar data={data} options={{
        indexAxis:'y',
        scales:{
            xAxes: {
                
                grid:{
                    display:false,
                    drawBorder:false
                }
            },
            yAxes: {
                
                grid:{
                    display:false,
                    drawBorder:false
                }
            }
        }
    }} />
    </div>
  )
}

