import Paper from '@mui/material/Paper';
import  Grid from '@mui/material/Grid';
import { ReactNode } from 'react';
import Typography from '@mui/material/Typography'
import styles from "../stylesheets/card.module.scss"
import { Link } from 'react-router-dom'
import { transform } from 'typescript';
import { Scale } from '@mui/icons-material';


interface ICardProps {
    excercise?: string,
    children?: ReactNode
}

const Card = ({excercise} : ICardProps) => {
  return (
    <Grid item  xs={6} sx={{my: 2}}>
        <Link to={`/${excercise?.toLocaleLowerCase()}`} style={{textDecoration: 'none'}}>
        <Paper elevation={5} className={`${styles.body}`} sx={{border:'solid 2px #011627', borderRadius:'10px', boxShadow:'0 0 4px black', ':hover': {transform: "scale(1.03)", borderColor: '#20A4F3'}}}>

            <Typography component={'h3'} variant={'h5'} textAlign='center'>{excercise}</Typography>

            <img src={`${excercise?.toLowerCase()}.jpg`} alt="Dead lift" style={{width: '100%', aspectRatio: 'initial'}} />

        </Paper>
        </Link>

    </Grid>
  )
}

let style = {
  
  
}


export default Card