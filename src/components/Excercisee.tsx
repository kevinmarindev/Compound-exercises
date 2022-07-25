import { ReactNode } from 'react';
import Table from '../components/Table';
import Container  from '@mui/system/Container';
import Input from '../components/Input';
import Bubbles from './Bubble';
import { useState, useEffect } from 'react'

interface IExcerProps {
    excercise?: string,
    children?: ReactNode
}

const Excercisee = ({excercise} : IExcerProps) => {
    const [display, setDisplay] = useState('')
    console.log(display)
  return (
    <Container fixed style={{backgroundColor: 'white', borderRadius: '10px'}}>
        <Input setDisplay={setDisplay}></Input>
        <Bubbles display={display}></Bubbles>
        <Table setDisplay={setDisplay} display={display}></Table>
    </Container>
  )
}

export default Excercisee