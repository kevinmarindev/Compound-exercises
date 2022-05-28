import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import { Box } from "@mui/system"
import  Typography  from "@mui/material/Typography"
import { useState } from "react"

const Input = () => {
    const [date, setDate] = useState('')
    const [weight, setWeight] = useState('')
    const [reps, setReps] = useState('')
    const [sets, setSets] = useState('')


    // const submitForm 
    // const 
  return (
    <div>
        <Box component={'form'}>
            <Typography component={'h4'} variant={'h5'}>Add new workout</Typography>
            <label htmlFor="date">Date: </label>
            <input type="date" id="date" required/>
            <label htmlFor="weight">Weight: </label>
            <input type="number" id="weight" required/>
            <label htmlFor="reps">Reps: </label>
            <input type="number" id="reps" required/>
            <label htmlFor="sets">Sets: </label>
            <input type="number" id="sets" required/>
            <Button>Submit</Button>
        </Box>
    </div>
  )
}

export default Input