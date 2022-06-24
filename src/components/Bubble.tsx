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
                beginAtZero: true,
            },
            x: {
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
            backgroundColor: "#FE3366",
            borderColor: '#F6F7F8'
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
            backgroundColor: '#FE3366',
            borderColor: '#F6F7F8',
        }
        
      ]
      
  })
  },[display])

  return (
    <Bubble data={datas} options={options}></Bubble>
  )
}

export default Bubbles