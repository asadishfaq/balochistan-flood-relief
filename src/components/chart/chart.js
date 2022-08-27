import {
    ArcElement, Chart as ChartJS, Legend, RadialLinearScale, Tooltip
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
  
export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Black'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 9, 10, 25, 13,25],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        // borderWidth: 1,
        // hoverBackgroundColor :[
        //     'rgba(255, 99, 132, 0.5)',
        //     'rgba(54, 162, 235, 0.5)',
        //     'rgba(255, 206, 86, 0.5)',
        //     'rgba(75, 192, 192, 0.5)',
        //     'rgba(153, 102, 255, 0.5)',
        //     'rgba(255, 159, 64, 0.5)',
        //   ],
        // scaleStepWidth: 40,
          
         
          
      },
    ],
  };
  export function Chart() {
    return <div style={{width:"600px",height:"600px"}}><PolarArea data={data}   /></div>;
  }
// function Chart() {
//     return ( <div> Chart</div> );
// }



export default Chart;