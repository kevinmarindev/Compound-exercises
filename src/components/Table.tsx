import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react'
import { Delete } from '@mui/icons-material'

// function createData(
//   date: Date | string ,
//   weight?: number,
//   reps?: number,
//   sets?: number,
// ) {
//   return { date, weight, reps, sets};
// }
// function createData(
//   date: Date | string,
//   weight?: number,
//   reps?: number,
//   sets?: number,
// ) {
//   return { date, weight, reps, sets};
// }
// let arrays = JSON.parse(localStorage.getItem(`${window.location.pathname}`) as string) || null
// console.log(arrays)
// function createData(arrays : string){
 
  // console.log(rows)
  // conversionArr.
// }


// if(!localStorage.getItem(`${wideLocation}`)){
//            localStorage.setItem(`${}`, JSON.stringify([item]))
//        }

interface ITableProps {
    display?: string,
    setDisplay: Function 
} 


// const rows = [
//   createData(new Date(), 159, 6.0, 24),
//   createData(new Date(Date.now()), 237, 9.0, 37),
//   createData('Eclair', 262, 16.0, 24),
//   createData('Cupcake', 305, 3.7, 67),
//   createData('Gingerbread', 356, 16.0, 49),
// ];
// const rows = [
//   createData(localStorage.getItem(`${window.location.pathname}`) as string),
// ];
// &nbsp;
export default function BasicTable({ display, setDisplay }: ITableProps) {

  const [arrayOne, setArrayOne] = useState<[][]>([])
  
  
  useEffect(()=> {
    // setDisplay(displayIt as string)
    setArrayOne(() => JSON.parse(localStorage.getItem(`${window.location.pathname}`)as string )?.sort((a : any, b : any) => (new Date(a[0])as any) as any - (new Date(b[0]) as any) as any)
    )
    
    
  },[display])

  const runitUp = (array: [][], item : []) => {
    localStorage.setItem(`${window.location.pathname}`, JSON.stringify(array.filter((item2) => item2 !== item)))

    setArrayOne(() => JSON.parse(localStorage.getItem(`${window.location.pathname}`)as string )?.sort((a : any, b : any) => (new Date(a[0])as any) as any - (new Date(b[0]) as any) as any)
    )

    setDisplay(() => `${window.location.pathname}${Date.now()}`)


  }

 
  
  console.log('rendering table ')
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Reps</TableCell>
            <TableCell align="right">Sets</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arrayOne?.map((item : any, idx: number, array) => (
            <TableRow
              key={Math.random() * 100}
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
              // onClick={() => setArrayOne(array.filter((thing) => thing !== item)}
              // onClick={()=> localStorage.setItem(`${window.location.pathname}`, JSON.stringify(array.filter((item2) => item2 !== item)))}
              // onMouseUp={()=> setRefresh((prev)=> prev + 1)}
              
             
            >
              <TableCell component="th" scope="row">
                {String(item[0])}
              </TableCell>
              <TableCell align="center">{item[1]}</TableCell>
              <TableCell align="center">{item[2]}</TableCell>
              <TableCell align="center" >{item[3]}</TableCell>
              <div><Delete onClick={() => runitUp(array, item)}/></div>
              {/* <TableCell align="right" onClick={() => runitUp(array, item)}></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}