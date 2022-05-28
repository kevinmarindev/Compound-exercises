import Paper from '@mui/material/Paper';
import  Grid from '@mui/material/Grid';
import { ReactNode } from 'react';
import Typography from '@mui/material/Typography'
import styles from "../stylesheets/card.module.scss"
import { Link } from 'react-router-dom'


interface ICardProps {
    excercise?: string,
    children?: ReactNode
}

const Card = ({excercise} : ICardProps) => {
  return (
    <Grid item sm={6} xs={12} sx={{my: 2}}>
        <Link to={`/${excercise?.toLocaleLowerCase()}`} style={{textDecoration: 'none'}}>
        <Paper elevation={5} className={`${styles.body}`}>
            <Typography component={'h3'} variant={'h6'}>{excercise}</Typography>
            <img src={`${excercise?.toLowerCase()}.jpg`} alt="Dead lift" style={{width: '100%', aspectRatio: 'initial'}} />
        </Paper>
        </Link>

    </Grid>
  )
}


export default Card