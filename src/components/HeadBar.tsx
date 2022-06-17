import React from 'react'
import Box from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import { useLocation } from 'react-router-dom'

const HeadBar = () => {
  const location = useLocation()
  console.log(location.pathname.toUpperCase().split('/').splice(1).join().replaceAll(/p/gi, ' P'))
  return (
    <Box component='header' style={{backgroundColor:'RGB(212,212,212)',  boxShadow: '0 0 10px #20A4F3'}} mb={8} px={2}>

        <Typography component={'h3'} variant={'h3'} display={'flex'} justifyContent={'center'} color={'black'} fontWeight='bold'>{location.pathname === '/' ? 'Compound Exercises Tracker' : location.pathname.toUpperCase().split('/').splice(1).join().replaceAll(/p/gi, ' P')}</Typography>

        {/* `${location.pathname.replaceAll(/\/|\%|\d\d/gi, ' ').toUpperCase()}` */}

        <Typography component={'h4'} variant={'subtitle1'} sx={{display : {md: 'block', xs: 'none'}}} textAlign='center' color={'black'}>{location.pathname != '/' ? '' : "Progress along with plateus are easier to spot when presented visually"}</Typography>

    </Box>
  )
} 

export default HeadBar