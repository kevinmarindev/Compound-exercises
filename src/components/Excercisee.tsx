import { ReactNode } from 'react';
import Table from '../components/Table'
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
    <>
        <Input setDisplay={setDisplay}></Input>
        <Bubbles setDisplay={display}></Bubbles>
        <Table setDisplay={display}></Table>
    </>
  )
}

export default Excercisee