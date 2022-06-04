import { ReactNode } from 'react';
import Table from '../components/Table'
import Input from '../components/Input';
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
        <Table setDisplay={display}></Table>
    </>
  )
}

export default Excercisee