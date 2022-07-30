import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState, useEffect } from "react";
import { BorderColor } from "@mui/icons-material";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
const options = {
        scales: {
            y: {
                display: true,
                title: {
                  display: true,
                  text: "Reps",
                  font: {
                    size: 15
                  },
                },
                beginAtZero: true
            },
            x: {
                display: true,
                title: {
                  display: true,
                  text: 'Weight',
                  font: {
                    size: 16
                  },
                },
                beginAtZero: true,
            },
        },};

interface ITableProps {
    display?: string,
} 


const Bubbles = ({ display }: ITableProps) => {
//   const [arrayOne, setArrayOne] = useState<[][]>([])
      // const [datas, setData] = useState({})
  const [datas, setData] = useState({
    //   label: '',
      datasets: [
        {
            label: 'Table Data',
            data: Array.from( JSON.parse(localStorage.getItem(`${window.location.pathname}`)as string ) || [], (arr : string[]) => ({
                 x: arr[1],
                y: arr[2],
                r: arr[3]
            })),
            backgroundColor: "RGB(255,77,7)",
            borderColor: 'RGB(255,77,7)'
        }
      ]
      
  })

  useEffect(()=> {
    setData({
      datasets: [
        {
            label: 'Table Data',
            data: Array.from( JSON.parse(localStorage.getItem(`${window.location.pathname}`)as string ) || [], (arr : string[]) => ({
                 x: arr[1],
                y: arr[2],
                r: arr[3]
            })),
            backgroundColor: 'RGB(255,77,7)',
            borderColor: 'RGB(255,77,7)',
        }
        
      ]
      
  })
  },[display])

  return (
    <Bubble data={datas} options={options}></Bubble>
  )
}

export default Bubbles