import { Alert, Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import { Box } from "@mui/system"
import  Typography  from "@mui/material/Typography"
import React, { useState, useRef, ReactNode } from "react"
import { useLocation } from 'react-router-dom'
import { AltRoute } from "@mui/icons-material"

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
    // const weightIt = useRef()
    // const repIt = useRef()
    // const setsIt = useRef()


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

       console.log('beofer success')
       setSuccess(() => true)
       console.log(success)

       dateIt.current?.reset()
       
       setDisplay(() => `${window.location.pathname}${Date.now()}`)


       
    }
    // console.log(errsOnForm)

    // {'date': Boolean(date), 'weight': Boolean(weight), 'reps': Boolean(reps), 'sets': Boolean(sets)}
    
  return (
    <div>
        <Box component={'form'} id='form1' ref={dateIt}>
            <Typography component={'h4'} variant={'h5'} >Add new workout</Typography>
         
            <TextField error={errsOnForm.date} type='date' id="input-date" label="Date" InputLabelProps={{ shrink: true }} onBlur={(e) => setDate(e.target.value)} />

            <TextField error={errsOnForm.weight} type='number' id="input-weight" label="Weight" 
            onChange={(e) => setWeight(e.target.value)} />

            <TextField error={errsOnForm.reps} type='number' id="input-reps" label="Reps" onChange={(e) => setReps(e.target.value)} />

            <TextField error={errsOnForm.sets} type='number' id="input-sets" label="Sets" onChange={(e) => setSets(e.target.value)} />

            <Button variant='outlined' form='form1' onClick={submitForm}size='small'>Submit</Button>

            {alert ? <Alert severity="error">Numbers are beyond human capabilities</Alert> : success ? <Alert severity="success">Data added successfully</Alert> : ''}


        </Box>
    </div>
  )
}

export default Input