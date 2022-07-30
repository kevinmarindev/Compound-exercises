import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch'
import Paper from '@mui/material/Paper';
import React, { ReactFragment, ReactNode, useEffect, useState, useRef } from 'react'
import { Delete } from '@mui/icons-material'
import { Box } from '@mui/system';

interface ITableProps {
    display?: string,
    setDisplay: Function 
} 

export default function BasicTable({ display, setDisplay }: ITableProps) {

  const [arrayOne, setArrayOne] = useState<[][]>([])
  const [check, setCheck] = useState(false)
  const switchOne = useRef<HTMLButtonElement>(null)
  
  useEffect(()=> {
    setArrayOne(() => JSON.parse(localStorage.getItem(`${window.location.pathname}`)as string )?.sort((a : any, b : any) => (new Date(b[0])as any) as any - (new Date(a[0]) as any) as any)
    )
  },[display])

  const deleteOne = (array: [][], item : []) => {
    localStorage.setItem(`${window.location.pathname}`, JSON.stringify(array.filter((item2) => item2 !== item)))

    setArrayOne(() => JSON.parse(localStorage.getItem(`${window.location.pathname}`)as string )?.sort((a : any, b : any) => (new Date(b[0])as any) as any - (new Date(a[0]) as any) as any)
    )

    setDisplay(() => `${window.location.pathname}${Date.now()}`)
  }

  const sortByWeightOne = (e :React.ChangeEvent <HTMLInputElement>) => {
      // if(e.target.checked) setArrayOne(() => JSON.parse(localStorage.getItem(`${window.location.pathname}`)as string )?.sort((a : any, b : any) => (a[1])as any as any - (b[1]) as any) as any)

      e.target.checked ? setArrayOne(() => JSON.parse(localStorage.getItem(`${window.location.pathname}`)as string )?.sort((a : any, b : any) => (b[1])as any as any - (a[1]) as any) as any) : setArrayOne(() => JSON.parse(localStorage.getItem(`${window.location.pathname}`)as string )?.sort((a : any, b : any) => (new Date(b[0])as any) as any - (new Date(a[0]) as any) as any)
    )
      // console.log(switchOne.current.ownerDocument)
      // setCheck((prev) => !prev)
      // console.log(check)
      // if(check) setArrayOne(() => JSON.parse(localStorage.getItem(`${window.location.pathname}`)as string )?.sort((a : any, b : any) => (a[1])as any as any - (b[1]) as any) as any)
      // sortByWeightTwo()

  }

  const sortByWeightTwo = () =>{
    console.log(check)
    if(check) setArrayOne(() => JSON.parse(localStorage.getItem(`${window.location.pathname}`)as string )?.sort((a : any, b : any) => (a[1])as any as any - (b[1]) as any) as any)
  }

console.log(check)
  return (
    <TableContainer component={Paper} sx={{width: "100%", marginBottom: '30px', marginTop: '40px', backgroundColor:'#F6F7F8'}} >
      <Switch onChange={sortByWeightOne} ref={switchOne}></Switch>
      <Box component={'span'} display={'inline'}>Filter by weight</Box>
      <Table sx={{ minWidth: 300}} aria-label="simple table">
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
            >
              <TableCell component="th" scope="row">
                {String(item[0])}
              </TableCell>
              <TableCell align="center">{item[1]}</TableCell>
              <TableCell align="center">{item[2]}</TableCell>
              <TableCell align="center" >{item[3]}</TableCell>
              <div style={{marginTop: '25%'}}><Delete onClick={() => deleteOne(array, item)} style={{color: 'RGB(255,77,7)'}}/></div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}