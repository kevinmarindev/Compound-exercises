import React from 'react'
import Box from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import { useLocation } from 'react-router-dom'

const HeadBar = () => {
    const location = useLocation()
  return (
    <Box component='header' style={{backgroundColor:'#2EC4B6', borderRadius: '15px'}} mb={8} px={2}>
        <Typography component={'h3'} variant={'h3'} display={'flex'} justifyContent={'center'} color={'#011627'}>{location.pathname === '/' ? 'Compound Exercises Tracker' : `${location.pathname.replaceAll(/\/|\%|\d\d/gi, ' ').toUpperCase()}`}</Typography>
        <Typography component={'h4'} variant={'subtitle1'} textAlign='center' color={'#011627'}>{location.pathname != '/' ? '' : "Progress along with plateus are easier to spot when presented visually"}</Typography>
    </Box>
  )
} 

export default HeadBar