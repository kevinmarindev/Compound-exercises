import { Alert, Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import { Box } from "@mui/system"
import  Typography  from "@mui/material/Typography"
import React, { useState, useRef } from "react"
import { useLocation } from 'react-router-dom'

interface IerrProps {
    date?: boolean,
    weight?: boolean,
    reps?: boolean,
    sets?: boolean
}

interface ITableProps {
    setDisplay: Function,
} 

const Input = ({ setDisplay }: ITableProps) => {
    const [date, setDate] = useState('')
    const [weight, setWeight] = useState('')
    const [reps, setReps] = useState('')
    const [sets, setSets] = useState('')
    const [errsOnForm, setErrsOnForm] = React.useState<IerrProps>({'date': Boolean(date), 'weight': Boolean(weight), 'reps': Boolean(reps), 'sets': Boolean(sets)})

    const [alert, setAlert] = React.useState(false)
    const [success, setSuccess] = React.useState(false)

    const Location = useLocation()

    const dateIt= useRef<HTMLFormElement>(null)

    const submitForm =  (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(e.target, e.currentTarget)
        console.log(dateIt.current)
        
        
        let item: string[] = []
        
        console.log(errsOnForm)
        setErrsOnForm((prev) => ({date: Boolean(!date), 'weight': Boolean(!weight), 'reps': Boolean(!reps), 'sets': Boolean(!sets)}))
        
        if(!date || !reps || !sets || !weight) return 
        console.log('after')

        if(weight.length > 3 || reps.length > 2 || sets.length > 2) return setAlert(() => true)
    
        
        console.log('all good')
        if(date && weight && reps && sets){
            item = [date, weight, reps, sets]
        } 

       console.log(item)

       if(localStorage.getItem(`${Location.pathname}`)){
           let alreadyIn = JSON.parse(localStorage.getItem(`${Location.pathname}`) as string)
           console.log(alreadyIn)

           alreadyIn.push(item)
        
           localStorage.setItem(`${Location.pathname}`, JSON.stringify(alreadyIn))
           
           setAlert(() => false)
       }

       if(!localStorage.getItem(`${Location.pathname}`)){
           localStorage.setItem(`${Location.pathname}`, JSON.stringify([item]))

           setAlert(() => false)
       }

       setSuccess(() => true)

     
       dateIt.current?.reset()
       setDate(()=> '')
       setWeight(() => '')
       setReps(() => '')
       setSets(() => '')

       
       setDisplay(() => `${window.location.pathname}${Date.now()}`)


       
    }
  return (
    <div style={{ backgroundColor: 'RGB(34,34,34)'}}>
        <Box component={'form'} id='form1' ref={dateIt} sx={{'& .MuiTextField-root': { marginBottom: 2, marginRight: 2 }}}
        >
            <Typography component={'h4'} variant={'h5'} color="black" fontWeight={'bold'} sx={{backgroundColor: 'RGB(34,34,34)'}}>Add Workout</Typography>

            <br />
         
            <TextField error={errsOnForm.date} type='date' id="input-date" label="Date" InputLabelProps={{ shrink: true }} onBlur={(e) => setDate(e.target.value)} sx={{width: 'min(220px, 50%)', color:"orange" }} helperText="Required"/>

            <br />

            <TextField error={errsOnForm.weight} type='number' id="input-weight" label="Weight" 
            onChange={(e) => setWeight(e.target.value)} sx={{width: {xs: '25%'}}} helperText="Required"/>

            <TextField error={errsOnForm.reps} type='number' id="input-reps" label="Reps" onChange={(e) => setReps(e.target.value)} sx={{width: {xs: '25%'}}} helperText="Required"/>

            <TextField error={errsOnForm.sets} type='number' id="input-sets" label="Sets" onChange={(e) => setSets(e.target.value)} sx={{width: {xs: '25%'}}} helperText="Required"/>

            

            <Button variant='contained' form='form1' color='primary' onClick={submitForm}size='medium' sx={{display: 'block', marginBottom: 3}}>Submit</Button>

            {alert ? <Alert severity="error">Numbers are beyond human capabilities</Alert> : success ? <Alert severity="success">Data added successfully</Alert> : ''}


        </Box>
    </div>
  )
}

export default Input