import React from 'react'
import {Line} from "react-chartjs-2"
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import "./Home.css"

Chart.register(CategoryScale);
export const Home = () => {
    const data={
        labels:['2014','2015','2016','2017','2018','2019','2020','2021','2022'],
        datasets:[ 
            {
                label:'Lives saved',
                data:[2570,3845,4900,6000,7260,8230,9120,9870,10875,11000],
                fill:true,
                backgroundColor:'rgb(222, 244, 247)',
                borderColor: 'rgb(6, 179, 202)'
            }
        ]
    }
    
  return (
    <div className='home'>

    <Line data={data} options={{
        scales:{
            x:{
                ticks:{
                    autoSkip:true,
                    maxTicksLimit:5,
                    maxRotation:0
                },
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

