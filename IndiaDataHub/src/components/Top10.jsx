import React from 'react'
import {Bar} from "react-chartjs-2"
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import "./Home.css"

Chart.register(CategoryScale);
export const Top10 = () => {
    const data={
        type:'horizontalBar',
        labels:['Labrador','Pit','Hound','Shepherd','Terrier','American','Cathoula','Hounds','Australian','Mountain'],
        datasets:[ 
            {
                label:'Top 10 Primary Breeds (Including Mixes)',
                data:[1422,838,400,376,306,157,155,150,126,108],
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

