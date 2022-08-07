import React from 'react'
import {Line} from "react-chartjs-2"
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import "./Home.css"

Chart.register(CategoryScale);
export const AvgTime = () => {
    const data={
        labels:['2017','2018','2019','2020','2021','2022'],
        datasets:[ 
            {
                label:'Avg Time to Adopt over Time',
                data:[0,38,55,57,39,40,58],
                fill:true,
                backgroundColor:'rgb(222, 244, 247)',
                borderColor: 'rgb(6, 179, 202)'
            }
        ]
    }
    
  return (
    <div className='graph'>

    <Line data={data} options={{
        scales:{
            x:{   
                offset:true,
                grid:{
                    display:false,
                    drawBorder:false
                }
                },
            y:{
                
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

