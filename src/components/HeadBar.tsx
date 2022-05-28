import React from 'react'
import Box from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import { useLocation } from 'react-router-dom'

const HeadBar = () => {
    const location = useLocation()
  return (
    <Box component='header'>
        <Typography component={'h3'} variant={'h3'} display={'flex'} justifyContent={'center'}>{location.pathname === '/' ? 'Track your progress' : `${location.pathname.replaceAll(/\/|\%|\d\d/gi, ' ').toUpperCase()}`}</Typography>
        <Typography component={'h4'} variant={'subtitle1'}>{location.pathname != '/' ? '' : "Progress along with plateus are easier to sport when presented visually track your progress visually"}</Typography>
    </Box>
  )
} 

export default HeadBar