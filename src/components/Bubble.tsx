import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState, useEffect } from "react";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },};

interface ITableProps {
    setDisplay?: string,
} 


const Bubbles = ({ setDisplay }: ITableProps) => {
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
            backgroundColor: "rgba(75,192,192,1)",
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
            backgroundColor: "rgba(75,192,192,1)",
        }
      ]
      
  })
  },[setDisplay])

  return (
    <Bubble data={datas}></Bubble>
  )
}

export default Bubbles