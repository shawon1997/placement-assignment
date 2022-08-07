import React from 'react'
import {Bar} from "react-chartjs-2"
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "./Home.css"

Chart.register(CategoryScale);
export const Proportion = () => {
    const data={
        type:'horizontalBar',
        labels:['Gets Along with Dogs','Gets Along with Cats','Gets Along with Kids','Are Housebroken'],
        datasets:[ 
            {
                //label:'Proportion of Dogs that...',
                label:'Does/Are',

                data:[87,29,58,38],
                
                fill:true,
                backgroundColor:'rgb(100, 229, 247)',
                borderColor: 'rgb(6, 179, 202)'
            },
            {
                //label:'Proportion of Dogs that...',
                label:'Does not/Are not',

                data:[1,7,3,6],
                
                fill:true,
                backgroundColor:'black',
                borderColor: 'rgb(6, 179, 202)'
            }
            ,
            {
                //label:'Proportion of Dogs that...',
                label:'not sure',

                data:[12,64,39,56],
                
                fill:true,
                backgroundColor:'grey',
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
                stacked:true,
                grid:{
                    display:false,
                    drawBorder:false
                }
            },
            yAxes: {
                stacked:true,
                grid:{
                    display:false,
                    drawBorder:false
                }
            }
        }
    }} 
    plugins={[
            ChartDataLabels
        ]}
    />
    </div>
  )
}

