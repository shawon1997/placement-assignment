import React from 'react'
import {Bar} from "react-chartjs-2"
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import "./Home.css"

Chart.register(CategoryScale);
export const Proportion = () => {
    const data={
        type:'horizontalBar',
        labels:['Gets Along with Dogs','Gets Along with Cats','Gets Along with Kids','Are Housebroken'],
        datasets:[ 
            {
                label:'Proportion of Dogs that',
                data:[87,29,58,38],
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

